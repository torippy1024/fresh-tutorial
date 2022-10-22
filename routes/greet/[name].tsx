import { PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";

export default function GreetPage(props: PageProps) {
  const {name} = props.params;
  return (
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
  )
}