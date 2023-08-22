export default function messageLoader({loader}) {
    return (
        <form method="POST" onsubmit={loader}>
            <button type="submit" name="loader" class="bg-grey-light border rounded p-4 shadow-md">
                load previous messages
            </button>
        </form>
    );
};
