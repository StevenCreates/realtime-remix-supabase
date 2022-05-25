import {
  useLoaderData,
  Form,
  useFetcher,
  useTransition,
} from "@remix-run/react";
import supabase from "~/utils/supabase";
import { useEffect, useState, useRef } from "react";
import { getSession } from "~/utils/cookies";
import authRequired from "~/utils/authRequired";

export const loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const { user } = await authRequired({ request });

  const { data: customer, error } = await supabase
    .from("customer_profile")
    .select("*, queue(*)")
    .match({ id: user.id })
    .single();
  if (error) {
    console.log(error.message);
  }
  return {
    customer,
  };
};

export const action = async ({ request }) => {
  const { user } = await authRequired({ request });
  const formData = await request.formData();
  const publicUser = formData.get("user");
  const position = formData.get("queuePosition");

  const { data, error } = await supabase.from("queue").insert({
    public_user: publicUser,
    status: "queued",
    is_complete: false,
    user_id: user.id,
    // uuid: "",
    position,
  });
  console.log(data);
  if (error) {
    console.log(error.message);
  }
  return null;
};

export default () => {
  const { customer } = useLoaderData();
  const [queue, setQueue] = useState(customer ? [...customer.queue] : []);

  const messageRef = useRef();

  return (
    <div>
      <Form ref={messageRef} className="queue-form mt-4" method="post">
        <input type="hidden" name="queuePosition" value={queue.length + 1} />
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
          <button
            type="submit"
            className="button inline-flex items-center p-1.5 border border-transparent rounded shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Add
          </button>
        </div>
      </Form>
    </div>
  );
};
