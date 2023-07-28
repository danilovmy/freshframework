import Chat from "../components/chat.tsx";
import { createRef } from 'preact';
import Message from "../components/message.tsx"
import render from 'preact-render-to-string';

const URL = 'ws://localhost:8000/api/users'

function createCild(message, user) {
    return document.createRange().createContextualFragment(render(<Message message={message} user={user} />).trim()).firstElementChild
}

function sendMessage(socket, username, event, board) {
    event.preventDefault()
    socket.send(JSON.stringify({message: event.target.message.value}))
    event.target.message.value = null
}

function getMessage(data, board) {
    // TODO, Check if more than 10000 <p> in board - remove something.
    board.current.appendChild(createCild(data.message, data.username))
}

export default function Board({ username, conduct }) {
    if (username.value && conduct.value) {
        const board = createRef()
        const socket = new WebSocket(`${URL}?username=${username.value}`)
        socket.onmessage = (message) => {getMessage(JSON.parse(message.data), board)}
        return (
            <div class="p-4 mx-auto max-w-screen-md max-h-80vh">
                <h2>
                    You are here as {username.value}
                </h2>
                <div class="my-6 border" ref={board}></div>
                <Chat username={username.value} sendMessage={(event) => sendMessage(socket, username, event, board)} />
            </div>
        );
    }
}