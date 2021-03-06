import React from "react";
import { Link } from "@remix-run/react";

const navigation = [
  { name: "OnlyMinty", href: "#" },
  // { name: "Pricing", href: "#" },
  // { name: "Docs", href: "#" },
  // { name: "Company", href: "#" },
];

export const Header = () => {
  return (
    <header className=" bg-zinc-800 mb-8">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-3 flex items-center justify-between border-b border-zinc-400 md:border-none lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 md:block lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link
              to={`/login`}
              className="inline-block bg-brand-blue py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </Link>
            <Link
              to="/tierselect"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-brand-blue hover:bg-fuchsia-50"
            >
              Sign up
            </Link>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 md:hidden lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
