import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((name) => name.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <div class="container mx-auto p-2">
      <form class="my-4">
        <input type="text" name="q" value={query} class="border rounded-l-full px-2" />
        <button type="submit" class="bg-blue-600 text-white rounded-r-full px-2 border border-blue-600">Search</button>
      </form>
      <div>
        <div class="text-xl font-bold my-2">
          "{query}"の検索結果
        </div>
        <ul>
          {results.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
    </div>
  );
}