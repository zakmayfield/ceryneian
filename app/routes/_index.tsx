import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Chicken | Coffee' }];
};

export default function Index() {
  return (
    <>
      <div className="relative bg-[url('~/images/coffee.jpeg')] bg-cover bg-center min-h-screen text-slate-gray flex justify-center items-center">
        <div className='absolute inset-0 bg-[color:rgb(255,255,255,0.4)] mix-blend-lighten' />
        <div className='absolute text-slate-gray font-playfair-display'>
          <div className='border-b text-center font-sans uppercase tracking-widest text-lg pb-1 font-source-sans-pro'>
            Hello Friend
          </div>
          <h2 className='text-7xl font-bold mt-3'>We're so glad you're here.</h2>
        </div>
      </div>
    </>
  );
}
