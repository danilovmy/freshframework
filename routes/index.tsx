import { Head } from "$fresh/runtime.ts";
/** import { useSignal } from "@preact/signals"; */
import Hello from "../islands/hello.tsx";
import Сonduct from "../islands/conduct.tsx";
import Board from "../islands/board.tsx";
import Layout from "../components/layout.tsx";
/** const count = useSignal(3); */

export default function Home() {
    let username = ''
    let conduct = ''
    return (
        <Layout>
            <Head>
                <title>Real-time Chat Application</title>
            </Head>
            {!username && !conduct && (
                <div class="p-4 mx-auto max-w-screen-md">
                    <Hello username={username} onChange={(newUsername) => {username = newUsername; return false}} />
                </div>
            )}
            {username && !conduct && (
                <div className="p-4 mx-auto max-w-screen-md">
                    <Сonduct username={username} conduct={conduct} />
                </div>)}
            {username && conduct && (
                <div className="p-4 mx-auto max-w-screen-md">
                    <Board username={username} conduct={conduct} />
                </div>
            )}
        </Layout>
    );
}
