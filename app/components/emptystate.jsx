import React from "react";
import { ExclamationIcon } from '@heroicons/react/outline'


const textOptions = {
  authenticated:
  {
    title:  'Add people to queue',
    subtext: 'The queue is currently empty, add users to queue manually or through the paid/verification tab.',
  },
  no_customer:
  {
    title:  'Uh OH! No customer exists at this page',
    subtext: 'Please check your url.',
  },
  user_view:
  {
    title:  'No one in the queue!',
    subtext: `If the queue is empty that either means you could be next! Or your favorite seller isn't online.`,
  },
}

const stateClasses = {
  no_customer: `py-12 h-64 w-1/2 bg-white mx-auto m-24 rounded shadow`,
  default: `py-12 rounded bg-white shadow-sm mx-auto`
}

export const EmptyState = ({ state = 'no_customer' }) => {

  //TO DO: Add a single object for for text and icons and state

  const text = textOptions[state]
  const style = stateClasses[state || 'default']


  return (
    <div className={style}>
      <div>
        <div className="text-center">
          { state === 'no_customer' ? <ExclamationIcon className="mx-auto h-12 w-12 text-red-400" /> :
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>}
            <>
              <h2 className="mt-2 text-lg font-medium text-gray-900">
                {text.title}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {text.subtext}
              </p>
            </>
        </div>
      </div>
    </div>
  );
};
