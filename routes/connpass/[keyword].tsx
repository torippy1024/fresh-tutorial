import { Handlers, PageProps } from "$fresh/server.ts";

type EventType = {
  title: string;
  description: string;
  event_url: string;
  started_at: string;
  ended_at: string;
  limit: number;
  accepted: number;
};

export const handler: Handlers<EventType[] | null> = {
  async GET(_, ctx) {
    const { keyword } = ctx.params;
    const resp = await fetch(`https://connpass.com/api/v1/event/?keyword=${keyword}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const hoge = await resp.json();
    const events: EventType[] = hoge.events;
    return ctx.render(events);
  },
};

export default function Page({ data, params }: PageProps<EventType[] | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  const formatDate = (started_at: string, ended_at: string) => {
    const startDate = new Date(started_at);
    return `${startDate.getMonth()+1}/${startDate.getDate()}`;
  }

  return (
    <div class="bg-gray-100 min-h-screen">
      <div class="bg-green-900 text-white text-3xl p-4 w-full sticky top-0">
        <div class="container mx-auto font-bold">
          ConnpassのAPIを叩いてみる
        </div>
      </div>
      <div class="container mx-auto p-4 bg-white">
        <div class="flex items-end border-b-2">
          <div class="font-bold text-3xl mr-2">
            "{params.keyword}"の検索結果
          </div>
          <div>
            ({data.length}件)
          </div>
        </div>
        {data.map((event, index) => 
          <div key={index} class="border rounded my-2 bg-green-50">
            <div class="border-b bg-green-200 flex items-center h-[73px] overflow-hidden hover:overflow-auto">
              <div class="flex justify-center items-center text-2xl rounded-tl-sm bg-green-700 text-white flex-none h-full w-[73px]">
                {formatDate(event.started_at, event.ended_at)}
              </div>
              <div class="font-bold text-xl m-2">
                <a href={event.event_url} class="hover:underline" target="_blank" rel="noopener noreferrer">
                  {event.title}
                </a>
              </div>
            </div>
            <div class="p-2 h-24 overflow-auto">
              {event.started_at}
              {event.description.replace(/(<([^>]+)>)/gi, '')}
            </div>
            <div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}