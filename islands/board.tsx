import Chat from "../components/chat.tsx";
import { createRef, h } from 'preact';
import Message from "../components/message.tsx"
import render from 'preact-render-to-string';

function createCild(message) {
    return document.createRange().createContextualFragment(render(<Message message={message} />).trim()).firstElementChild
}

function sendMessage(username, event, board) {
    event.preventDefault()
    // TODO, Check if more than 10000 <p> in board - remove something.
    board.current.appendChild(createCild(event.target.message.value.trim()))
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
                    <Message message="Chat message" />
                </div>
                <Chat username={username.value} sendMessage={(event) => sendMessage(username, event, board)} />
            </div>
        );
    }
}