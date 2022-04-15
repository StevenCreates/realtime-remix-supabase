import React from 'react'

export const EmptyState = () => {
  return (
    <div className="py-12 rounded bg-white shadow-sm mx-auto">
    <div>
      <div className="text-center">
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
        </svg>
        <h2 className="mt-2 text-lg font-medium text-gray-900">Add people to queue</h2>
        <p className="mt-1 text-sm text-gray-500">
          The queue is currently empty, add users to queue manually or through the paid/verification tab.
        </p>
      </div>
      {/* <form action="#" className="mt-6 flex">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Enter an email"
        />
        <button
          type="submit"
          className="ml-4 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send invite
        </button>
      </form> */}
    </div>
    <div className="mt-10">
      {/* <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        Team members previously added to projects
      </h3> */}
      {/* <ul role="list" className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {people.map((person, personIdx) => (
          <li key={personIdx} className="py-4 flex items-center justify-between space-x-3">
            <div className="min-w-0 flex-1 flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                <p className="text-sm font-medium text-gray-500 truncate">{person.role}</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button
                type="button"
                className="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <PlusSmIcon className="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-900">
                  {' '}
                  Invite <span className="sr-only">{person.name}</span>{' '}
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  </div>
  )
}
