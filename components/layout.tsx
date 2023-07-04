import { Head } from "$fresh/runtime.ts";

export default function Layout({children}) {
  return (
    <main>
        <Head>
            <title>Real-time Chat Application</title>
        </Head>
        <nav>
            <ul>
                <li>
                    <a href="#top">top</a>
                </li>
                <li>
                    <a href="#bottom">bottom</a>
                </li>
            </ul>
        </nav>
        {children}
    </main>
  );
}
