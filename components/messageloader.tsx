export default function messageLoader({loader}) {
    return (
        <form>
            <button type="submit" name="loader" onclick={loader} class="bg-grey-light border rounded p-4 shadow-md">
                load previous messages
            </button>
        </form>
    );
};
