function changeUsername(username, event) {
    event.preventDefault()
    username.value = event.target.username.value
}

export default function UsernameForm({username}) {
    return (
        <form method="POST" onSubmit={(event) => changeUsername(username, event)}>
            <input type="text" name="username" value={ username.value || 'Anonym' }/>
            <button type="submit">Log in</button>
        </form>
    );
}
