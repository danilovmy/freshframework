interface Props {
  username?: string;
  codeOfConduct?: string;
  onChange: (newValue: string) => void
}

export default function Сonduct({ username,   codeOfConduct, onChange }: Props) {
    username = username || 'Anonym'
    return (
        <div class="p-4 mx-auto max-w-screen-md">
            <h2>
                Hello {username}
            </h2>
            <p class="my-6">
                To start chat, please accept our code of conduct.
            </p>
            <form>
                <button type="submit">I am understand, let's go to chat</button>
            </form>
        </div>
    );
}
