export default function Message({chat}) {
    return (
    <p class="p-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" id={chat._id} data-_id={chat._id} data-created={chat.created} role="chat message">
        <span class="font-medium">{chat.name || 'Chat'}:</span> {chat.message}
    </p>)
}


//their <div class="text-blue-800 bg-blue-50 dark:text-blue-400">
//own <div class="text-green-800 bg-green-50 dark:text-green-400">
