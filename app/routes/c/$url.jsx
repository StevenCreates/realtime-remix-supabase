import { useLoaderData, Form, useFetcher } from "@remix-run/react";
import supabase from "~/utils/supabase";
import {useEffect, useState} from 'react';


// Loads Data
export const loader = async ({ params: { url } }) => {
  const { data: customer, error } = await supabase
  .from("customer")
  //May want to update this in the future to only return whats needed not everything 
    .select("*, queue(*)")
    .match({url})
    .single();
  if (error) {
    console.log(error.message);
  }

  return {
    customer,
  };
};

// Mutates Data
export const action = async ({ request }) => {
  const formData = await request.formData();
  const content = formData.get("content");
  const customerId = formData.get("customerId");

  const { error } = await supabase
    .from("queue")
    .insert({ name: content, tiktok_handle: content, customer_id: customerId, status: 'queued', is_complete: false});
  if (error) {
    console.log(error.message);
  }
  return null;
};



export default () => {
  const { customer } = useLoaderData();
  const [queue, setQueue] = useState([...customer.queue]);
  const fetcher = useFetcher();

  // console.log({customer})
  useEffect(() => {
    supabase
    .from(`queue:customer_id=${customer.id}`)
    .on("*", (payload) => {
      setQueue(current => [...current, {name: payload.new.content, tiktok_handle: payload.new.content, customer_id: payload.new.customerId, status: 'queued', is_complete: false}]);
      fetcher.load(`/c/${customer.url}`)
    })
      .subscribe();
  }, []);

  // useEffect(() => {
  //   console.log(fetcher)
  //   if (fetcher.data){
  //     setQueue([...fetcher.data.queue]);
  //   }
  // }, [fetcher, fetcher.data])

  return (
    <div>
      <pre >{JSON.stringify(queue, null, 2)}</pre>
      <form method="post">
          <input name="content" />
          <input type="hidden" name="customerId" value={customer.id} />
          <button>Add to Queue</button>
      </form>
    </div>
  );
};
