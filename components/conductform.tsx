function changeConduct(conduct, event) {
    event.preventDefault();
    conduct.value = true;
};

export default function СonductForm({ conduct }) {
    return (
        <form>
            <button class="bg-grey-light border rounded p-4 shadow-md" type="submit" onclick={event => changeConduct(conduct, event)}>I am understand and accept it, let's go to chat</button>
        </form>
    );
};
