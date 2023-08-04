FROM denoland/deno:1.36.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

# Add import file to the container
COPY . .

# load dependencies
RUN deno cache main.ts --lock=deps.json --import-map=deno.json --lock-write dev.ts

#  share port

ENV DENO_INSTALL="/usr/local"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"
EXPOSE 8000

CMD ["deno", "task", "start"]
