import UsernameForm from "../components/usernameform.tsx";

function changeUsername(event, username) {
    console.log(username)
    event.preventDefault();
    username.value = event.target.username.value;
};


export default function Hello({username, conduct}) {
    if (!username.value && !conduct.value) {
        return (
            <div class="p-4 mx-auto max-w-screen-md">
                <img src="/logo.svg" class="w-32 h-32" alt="the fresh logo: a sliced lemon dripping with juice"/>
                <p class="my-6">
                    Welcome in Real-time Chat Application.
                    Please tell us your name:
                </p>
                <UsernameForm username={username} onSubmit={event => changeUsername(event, username)} />
            </div>
        );
    };
};
