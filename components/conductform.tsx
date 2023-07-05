function changeConduct(conduct, event) {
    event.preventDefault()
    conduct.value = true
}

export default function СonductForm({ conduct }) {
    return (
        <form method="POST" onSubmit={(event) => changeConduct(conduct, event)}>
            <button type="submit">I am understand and accept it, let's go to chat</button>
        </form>
    )
}
