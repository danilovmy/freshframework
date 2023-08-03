FROM denoland/deno:1.36.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

# Add import file to the container
# COPY deno.json .

# load dependencies
# RUN deno task update

#  share port
EXPOSE 8000

ENV DENO_INSTALL="/usr/local"
ENV PATH="${DENO_INSTALL}/bin:${PATH}"

CMD ["deno", "task", "start"]
