# Selected architectural decisions:
## Base:
The chat application is built on the Deno.fresh framework.

The chat allows multiple users to exchange messages simultaneously and stores the message history in the database. Additionally, to keep statistics, information about the headers of connection requests from users is also stored in the database. It is assumed that it is sufficient to save this header information once upon connection.

The application is divided into two parts: **frontend** and **backend**.

## Backend
The **backend** part is located in the _routes/api_ folder. 
The `users.ts` file handles chat functionality using the `WebSocket` protocol including actions:
- user registration/connection, 
- closing `WebSocket` connections upon user exit,
- broadcasting technical messages to all chat participants, 
- and broadcasting user messages to all chat participants.

The `messages.ts` file handles serving old chat messages via the `HTTPS` protocol. Additionally, the backend interacts with the MongoDB database, handling the storage of all incoming messages and performing searches for messages with a specific date.

The **backend** also performs server-side rendering (SSR) tasks by default upon the first user connection.

## frontend
The **frontend** part is located in the `islands` and `components` folders, as well as the _routes/index_ file. 
The _routes/index_ file serves as the **entry point** for all user actions.

The **entry point** coordinates the work of three islands:

- The `hello` island handles user nickname input.
- The `conduct` island serves as a honeypot for bots.
- The `board` island provides the chat service, including:
    - `WebSocket` connection to the server,
    - requesting old chat messages, 
    - displaying messages from users, 
    - sending messages from the current user.

The `components` are static elements that do not contain logic but are used to execute specific tasks within the application.

## Utils/code organisation
For code organization, two classes were created:

- **BackendChat** class: Implicitly implements the Active Record pattern to interact with the database.
- **FrontendChat** class: Acts as a container for methods that handle data retrieval and processing from the server.

Auxiliary code for connecting to MongoDB is located in the _storage/mongodb_ module.

## Comments
Services for managing old messages in **MongoDb** are not implemented.