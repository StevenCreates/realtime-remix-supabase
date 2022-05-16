import { Header } from "../components/header";
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <>
              <div className="relative h-full">
            <div className="absolute inset-x-0 bottom-0 h-full bg-gray-100" />
            <div className="h-full">
              <div className="relative shadow-xl h-full w-full sm:overflow-hidden">
                <div className="absolute h-full inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="octogon.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-brand-blue h-full mix-blend-multiply" />
                </div>
                <div className="relative h-full w-full">
                  <h1 className="text-center pt-24 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Only Minty.
                    </span>
                    <span className="block text-zinc-400">
                      Take control of your live selling and buying.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-zinc-200 sm:max-w-3xl">
                    Tools to take your live selling to the next level! With
                    self/auto managed queue, and notifications to let a user
                    know they're up next or when you're live. Deeper insights to
                    what times and products do the best.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                    <div className=" ">
                      {/* <button
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-800 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </button> */}
                      <button
                        href="#"
                        disabled
                        className="disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Coming Soon!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
