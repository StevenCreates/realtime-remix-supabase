import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "~/styles/app.css"

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader = () => {
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
    }
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  const { env } = useLoaderData();
  return (
    <html className="h-full bg-gray-100" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className='h-full'>
        <Outlet />
        <script dangerouslySetInnerHTML={{
          __html: `window.env= ${JSON.stringify(env)}`
        }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
