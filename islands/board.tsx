import render from 'preact-render-to-string';
import { createRef } from 'preact';

import Chat from "../components/chat.tsx";
import Message from "../components/message.tsx";
import MessageLoader from "../components/messageloader.tsx";

function url(host) {
    // TODO check secure protocol, not the localhost
    return `${host.includes('localhost') ? 'ws' : 'wss'}://${host}/api/users`;
}

function createCild(data) {
    return document.createRange().createContextualFragment(render(<Message message={data} />).trim()).firstElementChild
}

function sendMessage(socket, username, event, board) {
    event.preventDefault()
    socket.send(JSON.stringify({message: event.target.message.value}))
    event.target.message.value = null
}

function appendMessage(data, board) {
    // TODO, Check if more than 10000 <p> in board - remove something.
    board.current.append(createCild(data))
}

function appendPreviousMessage(event, board) {
    // TODO, Check if more than 10000 <p> in board - remove something.
    event.target.loader.disable = true;
    // Get info like messages = fetch(`/api/messages/${board.current.firstChild.id}`)

    board.current.prepend(createCild(data));

    if (messages.length == 50) {
        event.target.loader.disable = false;
    };
};

export default function Board({ username, conduct, host }) {
    if (username.value && conduct.value) {
        const board = createRef();
        const socket = new WebSocket(`${url(host)}?username=${username.value}`);
        socket.onmessage = (message) => {appendMessage(JSON.parse(message.data), board)};
        return (
            <div class="p-4 mx-auto max-w-screen-md max-h-80vh">
                <h2>
                    You are here as {username.value}
                </h2>
                <MessageLoader loader={(event) => appendPreviousMessage(event, board)} />
                <div class="my-6 border" ref={board}></div>
                <Chat username={username.value} sendMessage={(event) => sendMessage(socket, username, event, board)} />
            </div>
        );
    }
}