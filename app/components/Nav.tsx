import { NavLink } from '@remix-run/react';

type LinkItemProps = {
  data: {
    slug: string;
    content: string;
  };
};

type LinkData = {
  slug: string;
  content: string;
};

const links = [
  {
    slug: 'shop',
    content: 'Shop',
  },
  {
    slug: 'menu',
    content: 'Menu',
  },
  {
    slug: 'about-us',
    content: 'About Us',
  },
  {
    slug: 'find-us',
    content: 'Find Us',
  },
  {
    slug: 'contact-us',
    content: 'Contact Us',
  },
];

function LinkItem(link: LinkItemProps) {
  const { slug, content } = link.data;

  // i would like the animation to be something of the sort:
    // -> no border -> :hover -> bottom border slides in left to right
    // i could similate no border, i could in theory have a border that has a width of 0 (if thats even possible) and then when the hover state is actived i could start a transition of .1s to grow the bottom border from width:0 to width:100
  return (
    <NavLink
      to={slug}
      className={({ isActive }) =>
        `pb-0 border-b-2 border-transparent ${
          slug !== '/' ? 'hover:border-b-2 hover:border-gray-700' : ''
        } ${isActive && slug !== '/' ? 'font-normal' : ''}`
      }
    >
      {content}
    </NavLink>
  );
}

export default function Nav() {
  return (
    <nav className='flex w-full justify-between items-center px-7 py-6 bg-pale-aqua tracking-wide font-light font-slate-gray sticky top-0 z-10 text-sm'>
      <div className='text-4xl'>
        <LinkItem data={{ slug: '/', content: ' 🐓 ' }} />
      </div>

      <ul className='grid grid-cols-5 tracking-wider place-items-center'>
        {links.map((link: LinkData) => (
          <li key={link.slug}>
            <LinkItem data={link} />
          </li>
        ))}
      </ul>

      <div className='grid grid-cols-3 place-items-center'>
        <LinkItem data={{ slug: 'account', content: 'Account' }} />
        <div className='text-2xl place-self-end'>🔎</div>
        <div className='text-2xl place-self-end'>🛒</div>
      </div>
    </nav>
  );
}
