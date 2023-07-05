import { HandlerContext } from "$fresh/server.ts";

export const handler = (request, context) {
  const messages = []
  return new Response(messages);
}
