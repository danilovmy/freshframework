export default function Message({message}) {
    return (
    <p class="p-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" id={message.id} role="message">
        <span class="font-medium">{message.username || 'Chat'}:</span> {message.message}
    </p>)
}


//their <div class="text-blue-800 bg-blue-50 dark:text-blue-400">
//own <div class="text-green-800 bg-green-50 dark:text-green-400">
