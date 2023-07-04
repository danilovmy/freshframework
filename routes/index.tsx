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
            {!username && !conduct && (
                <Hello username={username} onChange={(newUsername) => {username = newUsername; return false}} />
            )}
            {username && !conduct && (
                <Сonduct username={username} conduct={conduct} />
            )}
            {username && conduct && (
                <Board username={username} conduct={conduct} />
            )}
        </Layout>
    );
}
