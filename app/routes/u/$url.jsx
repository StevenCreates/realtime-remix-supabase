import { useLoaderData, Form, useFetcher } from "@remix-run/react";
import supabase from "~/utils/supabase";
import { useEffect, useState } from "react";
import { Queue } from "../../components/queue";
import { EmptyState } from "../../components/emptystate";
import { QueueHeader } from "../../components/queueheader";
import {getSession} from '~/utils/cookies'

// Load data
export const loader = async ({ params: { url }, request }) => {
  const session = await getSession(request.headers.get('Cookie'))
  const accessToken = session.get('accessToken')

  supabase.auth.setAuth(accessToken);

  const { data: customer, error } = await supabase
    .from("customer")
    .select("company_name, id, url, queue(id, customer_id, publicUser, status)")
    .match({ url })
    .single();
  if (error) {
    console.log(error.message);
  }

  return {
    customer,
  };
};

// Mutate Data
export const action = async ({ request }) => {
  const formData = await request.formData();
  const publicUser = formData.get("user");
  const customerId = formData.get("customerId");
  const { error } = await supabase.from("queue").insert({
    name: publicUser,
    publicUser: publicUser,
    customer_id: customerId,
    status: "queued",
    is_complete: false,
  });
  if (error) {
    console.log(error.message);
  }
  return null;
};

export default () => {
  const { customer } = useLoaderData();
  const [queue, setQueue] = useState([...customer.queue]);
  const fetcher = useFetcher();

  useEffect(() => {
    supabase
      .from(`queue:customer_id=eq.${customer.id}`)
      // .match(customer.id)
      .on("*", () => {
        fetcher.load(`/u/${customer.url}`);
      })
      .subscribe();
    return () => {
      supabase.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (fetcher.data) {
      setQueue([...fetcher.data.customer.queue]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    setQueue([...customer.queue]);
  }, [customer]);

  console.log(supabase.auth.user())

  return (
    <div className="mx-1 md:mx-8 lg:mx-24">
      <QueueHeader companyName={customer.company_name} />
      {queue.length > 0 ? <Queue list={queue} /> : <EmptyState />}
      <Form className="queue-form mt-4" method="post">
        <input type="hidden" name="customerId" value={customer.id} />
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              User
            </label>
            <span className="text-sm text-gray-500" id="email-optional">
              Required
            </span>
          </div>
          <div className="mt-1">
            <input
              type="text"
              name="user"
              id="user"
              className="shadow-sm focus:ring-indigo-500 h-10 p-4 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
              placeholder="User: UmbreonChaser"
            />
          </div>
        </div>
        <div className="w-full text-right mt-2">
          <button className="button inline-flex items-center p-1.5 border border-transparent rounded shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            Add
          </button>
        </div>
      </Form>
    </div>
  );
};
