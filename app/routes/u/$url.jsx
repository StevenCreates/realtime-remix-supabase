import { useLoaderData, Form, useFetcher } from "@remix-run/react";
import supabase from "~/utils/supabase";
import { useEffect, useState } from "react";
import { Queue } from "../../components/queue";
import { EmptyState } from "../../components/emptystate";

// Load data
export const loader = async ({ params: { url } }) => {
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

  console.log(queue.length > 0)
  return (
    <div className="mx-1 md:mx-8 lg:mx-24" >
      {/* Put this in individual component */}
      <div className="mt-6 mb-6 flex items-center justify-center">
        <div className=" mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-center mb-4 text-gray-700">
              {customer.company_name}
            </h2>

            <div className="flex flex-wrap justify-center gap-2">
              <button className="bg-slate-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  imageRendering="optimizeQuality"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  viewBox="0 0 2859 3333"
                >
                  <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path>
                </svg>
              </button>

              <button className="bg-slate-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </button>

              <button className="bg-slate-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    {queue.length > 0 ?
      <Queue list={queue} /> :
      <EmptyState />
    }
      {/* <div className="bg-white border border-gray-300 overflow-hidden rounded-md">
        <ul className="divide-y divide-gray-300">
          {queue.map((item, index) => (
            <li key={item.id} index={index} className="">
              <div className="grid grid-cols-3">
                <div className="grid grid-cols-1 grid-rows-2">
                  <button
                    type="button"
                    className="inline-flex items-center w-12 px-2.5 py-1.5 border border-transparent text-xs font-medium shadow-sm text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-12 text-center text-slate-500 align-middle content-center justify-items-center items-center px-2.5 py-1.5 border border-slate-50 text-xs font-medium  shadow-sm bg-slate-100z  hover:bg-slate-200 focus:outline-none focus:ring-2 z-50 focus:ring-indigo-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  // style={{
                  //   "grid-column-start": '2',
                  //   "grid-column-end": '4',
                  // }}
                  className="text-lg leading-6 font-medium text-gray-900 w-100 flex items-center"
                >
                  {item.publicUser}
                </div>
                <div className="w-full text-right h-full">
                  <button
                    type="button"
                    className={`inline-flex w-24 justify-center h-full text-center align-middle content-center justify-items-center items-center px-2.5 py-1.5 border border-transparent text-xs font-medium  shadow-sm ${
                      index === 0
                        ? "text-amber-500"
                        : index === 1
                        ? "text-indigo-500"
                        : "text-slate-700"
                    } bg-white hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    {index === 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : index === 1 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
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
