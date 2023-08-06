# freshframework
Test deno fresh framework for AST Advanced Sales Technologies GmbH

This is a small single-page Real-time Chat Application where anonymous
users can send messages to a shared text board without prior registration.

# advantages:
● The application containerized with Docker.\
● A NoSQL database used to store the sent messages.\
● Denoland’s Fresh framework used for front end.\
● Multiple users can send messages simultaneously.\
● Publisched on GitHub.\
● GitHub Actions used to automatically lint the code on push.


# Links:
● Link to application with the Dockerfile: https://github.com/danilovmy/freshframework/ 

● Source for the application hosted on a GitHub. https://github.com/danilovmy/freshframework/ \
● A documentation about application https://github.com/danilovmy/freshframework/tree/main/docs \
● Design decisions descriptions https://github.com/danilovmy/freshframework/tree/main/docs/architecture.md 



# demo deployed on deno:
● https://danilovmy.deno.dev/

# How to start application:
● Install Docker \
● Install MongoDb local. Service should be achieviable for any per "mongodb://127.0.0.1:27017/" (no pasword no user) \
● Clone repository \
● Open CLI in cloned folder \
● Enter: "docker build -t fresh ." \
● After the end of install process enter: \
For windows: docker run -p 8000:8000 --volume %cd%:/app fresh \
For _nix: docker run -p 8000:8000 --volume $(pwd):/app fresh \
● Enjoy 


# Additional settings:
By default chat use Mongodb connection to database placed local mongodb://127.0.0.1:27017/", no pasword, no user

in **.env** file can be added:
`MONGODB_URL= your own database connection with pass and user in connection string`

if you want to use _Atlas MongoDB Cloud_:
    MONGODB_TYPE=atlas
    MONGODB_USER=user
    MONGODB_PASSWORD=password
    MONGODB_HOST1=connection to main server for your DB on Atlas MongoDB Cloud
    MONGODB_HOST2=connection to additional server for your DB on Atlas MongoDB Cloud
    MONGODB_HOST3=connection to additional reserve server for your DB on Atlas MongoDB Cloud

# Roadmap for future:
- add .dockerignore
- dockerize mongodb
- add docker-compose
- add Tests
- add css styles for chat
- Write article abbout this use-case

