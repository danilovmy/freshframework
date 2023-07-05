function submitOnShifterEnter(event) {
    if(event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault();
        event.target.form.sendButton.click()
    }
}

export default function Chat({ username, sendMessage }) {
    return (
        <form method="POST" onSubmit={sendMessage}>
            <textarea name="message" onkeydown={submitOnShifterEnter}> </textarea>
            <button type="submit" name="sendButton">Send</button>
        </form>
    );
}
