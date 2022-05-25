import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import React from "react";
import { LighteningIcon } from "./icons/lightening";
import { Form } from "@remix-run/react";

const statusSelect = {
  current: <LighteningIcon className="h-4 w-4 animate-pulse text-amber-500" />,
  next: (
    <span
      className="bg-indigo-50 h-4 w-4 rounded-full flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="bg-indigo-400 animate-pulse h-2 w-2 rounded-full" />
    </span>
  ),
  queued: (
    <span
      className=" bg-slate-300 h-4 w-4 rounded-full flex items-center justify-center"
      aria-hidden="true"
    >
      <span className="bg-slate-500 h-2 w-2 rounded-full" />
    </span>
  ),
};

export const Row = ({
  user,
  products,
  state,
  onRowUpClick,
  onRowDownClick,
  onFinishClick,
}) => {
  const status = statusSelect[state];

  const handleRowDownClick = () => {
    onRowDownClick(user);
  };

  const handleRowUpClick = () => {
    if (user.position === 1) {
      onFinishClick(user);
    } else {
      onRowUpClick(user);
    }
  };

  return (
    <div className="w-full grid grid-cols-5 grid-rows-2 h-14 box-border bg-white">
      <div
        style={{ gridRowStart: 1, gridRowEnd: 3 }}
        // className="overflow-hidden shadow-inner text-amber-500 justify-center items-center flex box-border p-2 w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"

        className="overflow-hidden text-amber-500 justify-center items-center flex box-border p-2 w-full h-full bg-zinc-200"
      >
        {/* {statusIcon} */}
        {status}
      </div>
      <div
        style={{ gridColumnStart: 2, gridColumnEnd: 5 }}
        className="overflow-hidden text-gray-800  pl-4 pt-0.5 h-full w-full bg-white"
      >
        <div className="">{user.public_user}</div>
      </div>
      <div
        style={{ gridColumnStart: 2, gridColumnEnd: 5 }}
        className="overflow-hidden  border-t-zinc-200 bg-white  pl-4 text-zinc-400 font-light border-t text-sm p-1 h-full w-full "
      >
        <div className="">{products}</div>
      </div>
      {/* <div
        style={{ gridRowStart: 1, gridRowEnd: 3, gridColumnStart: 5 }}
        className="overflow-hidden w-full h-full flex"
      > */}
      <Form
        style={{ gridRowStart: 1, gridRowEnd: 3, gridColumnStart: 5 }}
        className="overflow-hidden w-full h-full flex"
        // method="post"
      >
        <button
          onClick={handleRowUpClick}
          type="action"
          name="action"
          value="up"
          className="box-border border-r border-zinc-100 text-center w-1/2 p-4 inline-flex items-center justify-center px-2 py-1 h-full bg-zinc-200 cursor-pointer ease focus:outline-none"
        >
          {state === "current" ? (
            <CheckCircleIcon className=" text-teal-500 h-10 w-10" />
          ) : (
            <ChevronUpIcon className="text-white h-10 w-10" />
          )}
        </button>
        <input type="hidden" name="user" value={user} />
        <button
          type="action"
          onClick={handleRowDownClick}
          className="box-border text-center w-1/2 p-4 inline-flex items-center justify-center  px-2 py-1 h-full bg-zinc-200 cursor-pointer ease focus:outline-none"
        >
          <ChevronDownIcon className="text-white h-10 w-10" />
        </button>
      </Form>
      {/* </div> */}
    </div>
  );
};
