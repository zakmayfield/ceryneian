import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';
import Nav from './components/Nav';

import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen'>
        <div>
          <Nav />
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <Meta />
          <Links />
        </head>
        <body>
          <div className='bg-red-200 px-5 py-8 border-4 border-red-400'>
            <div className='border-l-8 border-red-600 pl-5'>
              <h1 className='text-4xl text-gray-900'>Something went wrong</h1>
              <h2 className='text-2xl text-gray-700'>
                {error.status} {error.statusText}
              </h2>
              <p className='mt-5 font-light tracking-wide'>{error.data}</p>
            </div>
          </div>
        </body>
      </html>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
