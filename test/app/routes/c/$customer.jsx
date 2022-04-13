import { useLoaderData } from "@remix-run/react";
import supabase from "~/utils/supabase";

export const loader = async ({ params: { url } }) => {
  const { data: customer, error } = await supabase
    .from("customer")
    .select("*, queue(*)")
    // .match({id})
    // .match({ id })
    .single();
  if (error) {
    console.log(error.message);
  }

  return {
    customer,
  };
};

export default () => {
  const { customer } = useLoaderData();
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const content = formData.get("content");
      const {data, error} = await supabase
      .from('queue')
      .insert({name: content, tiktok_handle: content, customer_id: customer.id, status: 'queued', is_complete: false})
      if (error) {
          console.log(error.message)
      }
    console.log({data})
  }
  return (
    <div>
      <pre >{JSON.stringify(customer, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
          <input name="content" />
          <button>Add to Queue</button>
      </form>
    </div>
  );
};
