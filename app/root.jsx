import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useFetcher,
} from "@remix-run/react";
import { useEffect } from "react";
import supabase from "~/utils/supabase";
import styles from "~/styles/app.css";

export const meta = () => ({
  charset: "utf-8",
  title: "Only Minty",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = () => {
  return {
    env: {
      PUBLIC_STRIPE_KEY: process.env.PUBLIC_STRIPE_KEY,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
  };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  const { env } = useLoaderData();
  // const fetcher = useFetcher();

  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     // console.log({event, session})
  //     if (event === "SIGNED_IN") {
  //       fetcher.submit(
  //         {
  //           accessToken: session.access_token,
  //         },
  //         {
  //           method: "post",
  //           action: "/auth/login",
  //         }
  //       );
  //     }
  //   });
  // }, []);

  return (
    <html className="h-full bg-gray-100" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full box-border">
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env= ${JSON.stringify(env)}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
