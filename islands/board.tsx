import render from 'preact-render-to-string';
import { createRef } from 'preact';

import Chat from "../components/chat.tsx";
import Message from "../components/message.tsx";
import MessageLoader from "../components/messageloader.tsx";
import ChatModel from 'store/frontendmodels.tsx';

function url(host) {
    // TODO check secure protocol, not the localhost
    return `${host.includes('localhost') ? 'ws' : 'wss'}://${host}/api/users`;
};

function createCild(chat) {
    return document.createRange().createContextualFragment(render(<Message chat={chat} />).trim()).firstElementChild;
};

function sendMessage(socket, username, event, board) {
    event.preventDefault();
    socket.send(JSON.stringify({message: event.target.message.value}));
    event.target.message.value = null;
};

function appendMessage(response, board) {
    // TODO, Check if more than 10000 <p> in board - remove something.
    board.current.append(createCild(ChatModel.parse(response)));
};

async function appendPreviousMessage(event, board) {
    // TODO, Check if more than 10000 <p> in board - remove something.
    event.preventDefault();
    event.target.loader.setAttribute('disabled', '');
    const messages = await (await (new ChatModel(board.current.firstElementChild.dataset)).reload()).json();
    messages.forEach(message => board.current.prepend(createCild(new ChatModel(message))));
    if (messages.length >= 10) {
            event.target.loader.removeAttribute('disabled');
        };
    };

export default function Board({ username, conduct, host }) {
    if (username.value && conduct.value) {
        const board = createRef();
        const socket = new WebSocket(`${url(host)}?user=${username.value}`);
        socket.onmessage = (response) => {appendMessage(response, board)};
        return (
            <div class="p-4 mx-auto max-w-screen-md max-h-80vh">
                <h2>
                    You are here as {username.value}
                </h2>
                <MessageLoader loader={async event => await appendPreviousMessage(event, board)} />
                <div class="my-6 border" ref={board}></div>
                <Chat username={username.value} sendMessage={(event) => sendMessage(socket, username, event, board)} />
            </div>
        );
    };
};
