# freshframework
Test deno fresh framework for AST Advanced Sales Technologies GmbH

This is a small single-page Real-time Chat Application where anonymous
users can send messages to a shared text board without prior registration.

# advantages:
● The application containerized with Docker.
● A NoSQL database used to store the sent messages.
● Denoland’s Fresh framework used for front end.
● Multiple users can send messages simultaneously.
● Publisched on GitHub
● GitHub Actions used to automatically lint the code on push.


# Links:
● Link to application with the Dockerfile: https://github.com/danilovmy/freshframework/ 

● Source for the application hosted on a GitHub. https://github.com/danilovmy/freshframework/ 
● A documentation about application https://github.com/danilovmy/freshframework/tree/main/docs
● Design decisions descriptions https://github.com/danilovmy/freshframework/tree/main/docs
● etc.


# demo deployed on deno:
● https://danilovmy.deno.dev/

# How to start application:
● Install Docker
● Install MongoDb local. Service should be achievable per "mongodb://127.0.0.1:27017/"
● Clone repository
● Open CLI in cloned folder
● Enter: "docker build -t fresh ."
● After the end of install process enter:
For windows: docker run -p 8000:8000 --volume %cd%:/app fresh
For _nix: docker run -p 8000:8000 --volume $(pwd):/app fresh
● Enjoy
