export default function СonductForm({onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            <button type="submit" class="bg-grey-light border rounded p-4 shadow-md">I am understand and accept it, let's go to chat</button>
        </form>
    );
};
