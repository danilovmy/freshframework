import { Handlers } from "$fresh/server.ts";
import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

const connectedClients = new Map()

function clean(username) {
    return username && username.split(/__[0-9]+\.[0-9]+__[0-9]+$/u)[0] || 'Chat'
}

function broadcast(message, username) {
    [...connectedClients.values()].forEach(socket => socket.send(JSON.stringify({message: message, username: clean(username)})))
}

export const handler = (request, context) => {
    const querystring = (new URL(request.url)).searchParams
    const { socket, response } = Deno.upgradeWebSocket(request)
    socket.username = `${querystring.get("username")}__${performance.now()}__${randomNumber()}`

    if (connectedClients.has(socket.username)) {
        connectedClients.delete(socket.username)
    }

    socket.onopen = () => {
        connectedClients.set(socket.username, socket)
        broadcast(`${clean(socket.username)} connected`)
    }
    socket.onclose = () => {
        connectedClients.delete(socket.username)
        broadcast(`${clean(socket.username)} disconnected`)
    }
    socket.onmessage = (message) => broadcast(`${JSON.parse(message.data).message}`, socket.username)
    socket.onerror = (error) => broadcast(`${clean(socket.username)} has problem`);
    response.headers.connection = 'keep-alive'
    return response
}
