interface Props {
  username?: string;
  codeOfConduct?: string;
  onChange: (newValue: string) => void
}

export default function Сonduit({ username, codeOfConduct, onChange }: Props) {
    username = username || 'Anonym'
    return (
        <div class="p-4 mx-auto max-w-screen-md">
            <h2>
                You are here as  {username}
            </h2>
            <div class="my-6 board">
                <p class="my-6" id="newMessage">
                    Chat Message.
                </p>
            </div>
            <form>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
