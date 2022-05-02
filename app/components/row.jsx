import {
  BeakerIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import React from "react";
import { LighteningIcon } from "./icons/lightening";

const statusIconSelect = {
  current: (
    <LighteningIcon className="h-full w-full animate-pulse text-amber-500" />
  ),
  next: <BeakerIcon className="h-full w-full text-indigo-700" />,
  queued: <ClockIcon className="h-full w-full text-zinc-700" />,
};

export const Row = ({ user, products, state }) => {
  const statusIcon = statusIconSelect[state];

  return (
    <div className="w-full grid grid-cols-5 grid-rows-2 h-14 box-border bg-white">
      <div
        style={{ gridRowStart: 1, gridRowEnd: 3 }}
        // className="overflow-hidden shadow-inner text-amber-500 justify-center items-center flex box-border p-2 w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"

        className="overflow-hidden text-amber-500 justify-center items-center flex box-border p-2 w-full h-full bg-zinc-200"
      >
        {statusIcon}
      </div>
      <div
        style={{ gridColumnStart: 2, gridColumnEnd: 5 }}
        className="overflow-hidden text-gray-800  pl-4 pt-0.5 h-full w-full bg-white"
      >
        <div className="">{user}</div>
      </div>
      <div
        style={{ gridColumnStart: 2, gridColumnEnd: 5 }}
        className="overflow-hidden  border-t-zinc-200 bg-white  pl-4 text-zinc-400 font-light border-t text-sm p-1 h-full w-full "
      >
        <div className="">{products}</div>
      </div>
      <div
        style={{ gridRowStart: 1, gridRowEnd: 3, gridColumnStart: 5 }}
        className="overflow-hidden w-full h-full flex"
      >
        <button
          href="#_"
          className="box-border border-r border-zinc-100 text-center w-1/2 p-4 inline-flex items-center justify-center px-2 py-1 h-full bg-zinc-200 cursor-pointer ease focus:outline-none"
        >
          {state === 'current' ?
          <CheckCircleIcon className=" text-teal-500 h-10 w-10" />
          :
          <ChevronUpIcon className="text-white h-10 w-10" />
          }
        </button>
        <button
          href="#_"
          className="box-border text-center w-1/2 p-4 inline-flex items-center justify-center  px-2 py-1 h-full bg-zinc-200 cursor-pointer ease focus:outline-none"
        >
          <ChevronDownIcon className="text-white h-10 w-10" />
        </button>
      </div>
    </div>
  );
};
