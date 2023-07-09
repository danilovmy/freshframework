import { useSignal } from "@preact/signals";
import Hello from "../islands/hello.tsx";
import Сonduct from "../islands/conduct.tsx";
import Board from "../islands/board.tsx";
import Layout from "../components/layout.tsx";


export default function Home() {
    const username = useSignal('');
    const conduct = useSignal(false);
    return (
        <Layout>
            <Hello username={username} conduct={conduct} class="container"/>
            <Сonduct username={username} conduct={conduct} class="container"/>
            <Board username={username} conduct={conduct} class="container"/>
        </Layout>
    );
}
