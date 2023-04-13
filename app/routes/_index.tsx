import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Chicken | Coffee' }];
};

export default function Index() {
  return (
    <>
      <div className="relative bg-[url('~/images/coffee.jpeg')] bg-cover bg-center min-h-screen text-slate-gray flex justify-center items-center">
        <div className='absolute inset-0 bg-[color:rgb(255,255,255,0.4)] mix-blend-lighten' />
        <div className='absolute text-slate-gray '>
          <div className='border-b text-center font-sans uppercase tracking-widest text-lg pb-1 font-source-sans-pro'>
            Hello Friend
          </div>
          <h2 className='text-7xl font-bold mt-3 font-playfair-display'>
            We're so glad you're here.
          </h2>
        </div>
      </div>

      <div className='text-center py-16 px-16 bg-pale-aqua'>
        <div className='w-3/5 mx-auto text-slate-gray '>
          <h3 className='font-playfair-display text-5xl font-bold tracking-wider'>
            From Toronto with 🤍
          </h3>
          <p className='my-10 w-11/12 mx-auto font-normal tracking-widest'>
            Our three shops are open seven days a week for all your caffeine &
            friendship needs. Come by for a bite and some banter. Grab a seat
            inside or out at King and Jarvis or enjoy our patio overlooking the
            park at Broadview.
          </p>
          <p className='font-light'>We thank you kindly for stopping by.</p>
        </div>
      </div>
    </>
  );
}
