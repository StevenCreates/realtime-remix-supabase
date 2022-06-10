import { TiktokIcon } from "../components/icons/tiktok";
import { EbayIcon } from "../components/icons/ebay";
import { Link } from "@remix-run/react";

const navigation = {
  social: [
    {
      name: "Ebay",
      href: "https://www.ebay.com/usr/onlymintycom",
      icon: (props) => <EbayIcon {...props} />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@onlyminty.com",
      icon: (props) => <TiktokIcon {...props} />,
    },
  ],
  amazon: [
    {
      name: "Centering Tool",
      href: "https://amzn.to/3HcWWej",
    },
    {
        name: "Top Loaders",
        href: "https://amzn.to/39aZGMB",
    },
    {
        name: "High Quality Penny Sleeves",
        href: "https://amzn.to/3O1G504"
    },
    {
        name: "Graded Card Sleeves",
        href: "https://amzn.to/3znHjPc"
    }
  ],
};

export default () => {
  return (
    <div className="w-full h-screen overflow-y-scroll overflow-x-hidden bg-zinc-800 p-4">
      <div className="flex-1 text-center min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
          OnlyMinty.com
        </h2>
      </div>
      <div className="mt-12 justify-center">
          <Link
          to={'/'}
          className="relative mb-4 flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-brand-blue rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-brand-blue rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative flex w-full text-slate-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            OnlyMinty.com Website (beta)
          </span>
        </Link>
      </div>
      <div className="mt-8 justify-center">
        {navigation.social.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative mb-4 flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-500 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-500 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative flex w-full text-slate-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              {" "}
              <item.icon className="h-6 w-6 mr-6" aria-hidden="true" />
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <div className="mt-8 justify-center">
        {navigation.amazon.map((item) => (
          <a
          key={item.name}
          href={item.href}
          className="relative mb-4 flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-amber-400 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-amber-400 rounded-md opacity-0 group-hover:opacity-100 "></span>
          <span className="relative flex w-full text-slate-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
            {" "}
            {item.name}
          </span>
        </a>
        ))}
      </div>
    </div>
  );
};
