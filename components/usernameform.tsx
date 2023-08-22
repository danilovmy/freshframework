function changeUsername(username, event) {
    event.preventDefault();
    username.value = event.target.username.value;
};

export default function UsernameForm({username}) {
    return (
        <form method="POST" onsubmit={(event) => changeUsername(username, event)}>
            <input type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="username" value={ username.value || 'Anonym' }/>
            <button type="submit" class="bg-grey-light border rounded p-4 shadow-md">Log in</button>
        </form>
    );
};
