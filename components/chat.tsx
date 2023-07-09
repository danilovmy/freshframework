function submitOnShifterEnter(event) {
    if(event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault()
        if (event.terget.form.message.value.trim()) {
            event.target.form.message.value = event.target.form.message.value.trim()
            event.target.form.sendButton.click()
        }
    }
}

export default function Chat({ username, sendMessage }) {
    return (
        <form method="POST" onSubmit={sendMessage}>
            <textarea name="message" onkeydown={submitOnShifterEnter}> </textarea>
            <button type="submit" name="sendButton" hidden>Send</button>
        </form>
    );
}
