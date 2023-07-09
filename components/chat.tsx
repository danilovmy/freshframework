function submitOnShifterEnter(event) {
    if(event.key == 'Enter' && !event.shiftKey) {
        event.preventDefault()
        if (event.target.form.message.value.trim()) {
            event.target.form.message.value = event.target.form.message.value.trim()
            event.target.form.sendButton.click()
        }
    }
}

export default function Chat({ username, sendMessage }) {
    return (
        <form method="POST" onSubmit={sendMessage}>
            <textarea name="message" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onkeydown={submitOnShifterEnter}> </textarea>
            <button type="submit" class="bg-grey-light border rounded p-4 shadow-md" name="sendButton" hidden>Send</button>
        </form>
    );
}
