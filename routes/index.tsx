import { signal, useSignal } from "@preact/signals";
import Hello from "../islands/hello.tsx";
import Сonduct from "../islands/conduct.tsx";
import Board from "../islands/board.tsx";
import Layout from "../components/layout.tsx";
import { Handlers } from "$fresh/server.ts";

const username = signal('');
const conduct = signal(false);

export default function Home(props) {
    return (
        <Layout>
            <Hello username={username} conduct={conduct} class="container"/>
            <Сonduct username={username} conduct={conduct} class="container"/>
            <Board username={username} conduct={conduct} host={props.url.host} class="container"/>
        </Layout>
    );
}
