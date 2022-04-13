import { useLoaderData } from "@remix-run/react";
import supabase from "~/utils/supabase";

export const loader = async ({ params: { id } }) => {
  const { data: channel, error } = await supabase
    .from("channels")
    .select("title, description, messages(id, content)")
    .match({ id })
    .single();
  if (error) {
    console.log(error.message);
  }

  return {
    channel,
  };
};

export default () => {
  const { channel } = useLoaderData();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const content = formData.get("content");
      const {data, error} = await supabase.from('message').insert({content, channel_id: channel.id})
      if (error) {
          console.log(error.message)
      }
      console.log({data})
  }
  return (
    <div>
      <pre key={channel}>{JSON.stringify(channel, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
          <input name="content" />
          <button>Send!</button>
      </form>
    </div>
  );
};
