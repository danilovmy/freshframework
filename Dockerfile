FROM denoland/deno:latest

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

# Add import file to the container
COPY . .

# load dependencies
RUN deno cache dev.ts --lock=deps.json --import-map=deno.json --lock-write dev.ts

#  share port

ENV DENO_INSTALL="/usr/local"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"
EXPOSE 8000

CMD ["deno", "task", "start"]
