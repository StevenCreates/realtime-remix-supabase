import { Header } from "../components/header";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import { TiktokIcon } from "../components/icons/tiktok";
import { EbayIcon } from "../components/icons/ebay";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Ebay",
      href: "#",
      icon: (props) => (
        <EbayIcon {...props} />
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@onlyminty.com",
      icon: (props) => (
          <TiktokIcon {...props}/>
      ),
    },
    // {
    //   name: "GitHub",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
  ],
};

const features = [
  {
    name: "Easy and Convenient Live Queue",
    description:
      "Unique Url and live queue you can share with your buyers. Easy to manage, saves time and helps users know when they are up",
    icon: GlobeAltIcon,
  },
  {
    name: "PSA, CGC Tools (coming soon)",
    description:
      "Free Pricing Data from PSA, CGC, TCGplayer, TCGrepublic. Risk analysis grading.",
    icon: ScaleIcon,
  },
  {
    name: "Seller Verification (coming soon)",
    description:
      "More details to come.",
    icon: LightningBoltIcon,
  },
];

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="person.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-fuchsia-600 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Take control of your
                    </span>
                    <span className="block text-zinc-400">
                      online selling and buying
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-zinc-200 sm:max-w-3xl">
                    Tools to take your live selling to the next level! With
                    self/auto managed queue, and notifications to let a user
                    know they're up next or when you're live. Deeper insights to
                    what times and products do the best. With more coming soon!
                    If you would like access to beta email steven@stevencreates.tech .
                    In the meantime checkout the ebay store in the social link at the bottom of the page.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <button
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-800 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Currently In Beta
                      </button>
                      <button
                        href="#"
                        disabled
                        className="disabled:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo (coming soon)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo cloud */}
          <div className="py-12 bg-gray-100">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">A better way to send money.</h2>
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white shadow text-brand-blue">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {/* {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </div>
            ))} */}
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2022 zStorm Development, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
