import { Handlers } from "https://deno.land/x/fresh@1.1.2/server.ts";

export const handler: Handlers = {
  GET() {
    const uuid = crypto.randomUUID();
    return new Response(JSON.stringify(uuid), {
      headers: {"Content-Type": "application/json"}
    });
  }
};