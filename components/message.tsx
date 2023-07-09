export default function Message({user, message}) {
    return (
    <p class="p-2 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="message">
        <span class="font-medium">{user}</span> {message}
    </p>)
}


//their <div class="text-blue-800 bg-blue-50 dark:text-blue-400">
//own <div class="text-green-800 bg-green-50 dark:text-green-400">
