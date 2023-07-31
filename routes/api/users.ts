import { Handlers } from "$fresh/server.ts"
import { randomNumber } from "https://deno.land/x/random_number/mod.ts"
import Chat from 'store/models.tsx'

const connectedClients = new Map()


async function broadcast(message, source) {
    const chat = await new Chat({message:message, user:source.user, request:source.request});
    chat.save();
    [...connectedClients.values()].forEach(socket => socket.send(JSON.stringify({message: message, username:source.user, id: source._id})))
}

export const handler = async (request, context) => {
    const querystring = (new URL(request.url)).searchParams
    const data = JSON.stringify({'bodyUsed':request.bodyUsed, 'method': request.method, 'redirect': request.redirect, 'url': request.url, 'headers': Object.fromEntries([...request.headers])})
    const { socket, response } = Deno.upgradeWebSocket(request)
    socket.user = `${querystring.get("username")}`
    socket.request = data
    socket._id = `${socket.user}__${performance.now()}__${randomNumber()}`

    if (connectedClients.has(socket._id)) {
        connectedClients.delete(socket._id)
    }

    socket.onopen = async () => {
        connectedClients.set(socket._id, socket)
        await broadcast(`${socket.user} connected`, socket)
    }
    socket.onclose = async () => {
        connectedClients.delete(socket._id)
        await broadcast(`${socket.user} disconnected`, socket)
    }
    socket.onmessage = async message => await broadcast(`${JSON.parse(message.data).message}`, socket)
    socket.onerror = async error => await broadcast(`${socket.user} has problem`, socket);
    response.headers.connection = 'keep-alive'
    return response
}
