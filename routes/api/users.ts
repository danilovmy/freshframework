import { Handlers } from "$fresh/server.ts"
import { randomNumber } from "https://deno.land/x/random_number/mod.ts"
import Chat from 'store/models.tsx'
import connection from 'store/mongodb.tsx'

const connectedClients = new Map()

function broadcast(message, source) {
    //const row = connection.chats.insertOne(new Chat(source.name, message, source.request, performance.now()))
    [...connectedClients.values()].forEach(socket => socket.send(JSON.stringify({message: message, username:source.user, id: source._id})))
}

export const handler = (request, context) => {
    const querystring = (new URL(request.url)).searchParams
    const { socket, response } = Deno.upgradeWebSocket(request)
    socket.user = `${querystring.get("username")}`
    socket.request = request

    socket._id = `${socket.user}__${performance.now()}__${randomNumber()}`

    if (connectedClients.has(socket._id)) {
        connectedClients.delete(socket._id)
    }

    socket.onopen = () => {
        connectedClients.set(socket._id, socket)
        broadcast(`${socket.user} connected`, socket)
    }
    socket.onclose = () => {
        connectedClients.delete(socket._id)
        broadcast(`${socket.user} disconnected`, socket)
    }
    socket.onmessage = (message) => broadcast(`${JSON.parse(message.data).message}`, socket)
    socket.onerror = (error) => broadcast(`${socket.user} has problem`, socket);
    response.headers.connection = 'keep-alive'
    return response
}
