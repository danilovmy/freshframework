import ConductForm from "../components/conductform.tsx";

function changeConduct(event, conduct) {
    event.preventDefault()
    conduct.value = true
}

export default function Сonduct({ username, conduct }) {
    if (username.value && !conduct.value) {
        return (
            <div class="p-4 mx-auto max-w-screen-md">
                <h2>
                    Hello {username.value}
                </h2>
                <p class="my-6">
                    To start chat, please accept our code of conduct.
                </p>
                <ConductForm conduct={conduct} onSubmit={event => changeConduct(event, conduct)} />
            </div>
        );
    };
};
