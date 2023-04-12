import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export default function Index() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Index</h1>
    </>
  );
}
