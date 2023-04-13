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

      <div>
        {/* 2 columns - 2 rows - last div spans 2 cols */}
        <div className='grid grid-cols-3 place-items-center font-playfair-display font-bold text-3xl tracking-wide text-slate-gray'>
          <div className="py-60 px-5 bg-red-200 w-full text-center relative bg-[url('~/images/shop1.jpeg')] bg-cover bg-center">
            <div className='absolute inset-0 bg-[color:rgb(255,255,255,0.4)] mix-blend-lighten' />
            <h3 className='relative z-10'>479 Broadview Avenue</h3>
          </div>
          <div className="py-60 px-5 bg-red-200 w-full text-center relative bg-[url('~/images/shop2.jpeg')] bg-cover bg-center">
            <div className='absolute inset-0 bg-[color:rgb(255,255,255,0.4)] mix-blend-lighten' />
            <h3 className='relative z-10'>343 King Street East</h3>
          </div>
          <div className="py-60 px-5 bg-red-200 w-full text-center relative bg-[url('~/images/shop3.jpeg')] bg-cover bg-center">
            <div className='absolute inset-0 bg-[color:rgb(255,255,255,0.4)] mix-blend-lighten' />
            <h3 className='relative z-10'>568 Jarvis Street</h3>
          </div>
        </div>
      </div>
    </>
  );
}
