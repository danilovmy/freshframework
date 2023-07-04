interface Props {
  username?: string;
  onChange: (newValue: string) => void
}



export default function Hello({ username, onChange }: Props) {
    username = username || 'Anonym'
    return (
        <div class="p-4 mx-auto max-w-screen-md">
            <img src="/logo.svg" class="w-32 h-32" alt="the fresh logo: a sliced lemon dripping with juice"/>
            <p class="my-6">
                Welcome in Real-time Chat Application.
                Please tell us your name:
            </p>
            <form method="POST" onSubmit={(event) => {event.preventDefault(); onChange(event.target.username.value);}}>
                <input type="text" name="username" value={ username }/>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}
