import Chat from "../components/chat.tsx";
import Message from "./message.tsx";
import { createRef, h } from 'preact';
import render from 'preact-render-to-string';

function createCild(message) {
    return h('p', {}, message);
}

/** document.createElement(render(<Message message={message} />)) */

function sendMessage(username, event, board) {
    event.preventDefault()
    board.current.appendChild(createCild(event.target.message.value))
    event.target.message.value = null
}


export default function Сonduit({ username, conduct }) {
    if (username.value && conduct.value) {
        const board = createRef()
        return (
            <div class="p-4 mx-auto max-w-screen-md">
                <h2>
                    You are here as {username.value}
                </h2>
                <div class="my-6" ref={board}>
                    <p class="my-6" id="newMessage">
                        Chat Message.
                    </p>
                </div>
                <Chat username={username.value} sendMessage={(event) => sendMessage(username, event, board)} />
            </div>
        );
    }
}