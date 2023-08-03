import { Handlers } from "$fresh/server.ts"
import { randomNumber } from "https://deno.land/x/random_number@2.0.0/mod.ts"
import ChatModel from 'store/backendmodels.tsx'

const connectedClients = new Map()


async function broadcast(message, name, request) {
    const chat = await new ChatModel({message:message, name:name, request:request}).save();
    [...connectedClients.values()].forEach(socket => socket.send(JSON.stringify(chat)))
}

export const handler = async (request, context) => {
    const querystring = (new URL(request.url)).searchParams
    const data = JSON.stringify({'bodyUsed':request.bodyUsed, 'method': request.method, 'redirect': request.redirect, 'url': request.url, 'headers': Object.fromEntries([...request.headers])})
    const { socket, response } = Deno.upgradeWebSocket(request)
    socket.user = `${querystring.get("user")}`
    socket.request = data
    socket._id = `${socket.user}__${performance.now()}__${randomNumber()}`

    if (connectedClients.has(socket._id)) {
        connectedClients.delete(socket._id)
    }

    socket.onopen = async () => {
        connectedClients.set(socket._id, socket)
        await broadcast(`${socket.user} connected`, 'Chat', socket.request)
    }
    socket.onclose = async () => {
        connectedClients.delete(socket._id)
        await broadcast(`${socket.user} disconnected`, 'Chat')
    }
    socket.onmessage = async message => await broadcast(`${JSON.parse(message.data).message}`, socket.user)
    socket.onerror = async error => await broadcast(`${socket.user} has problem`, 'Chat');
    response.headers.connection = 'keep-alive'
    return response
}
