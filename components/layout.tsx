import { Head } from "$fresh/runtime.ts";

export default function Layout({children}) {
  return (
    <main>
      <Head>
        <title>Real-time Chat Application</title>
      </Head>
      {children}
    </main>
  );
}
