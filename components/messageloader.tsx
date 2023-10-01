export default function messageLoader({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <button type="submit" name="loader" class="bg-grey-light border rounded p-4 shadow-md">
                load previous messages
            </button>
        </form>
    );
};
