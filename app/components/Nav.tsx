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

  return (
    <NavLink
      to={slug}
      className={({ isActive }) =>
        isActive && slug !== '/' ? 'font-normal' : ''
      }
    >
      {content}
    </NavLink>
  );
}

export default function Nav() {
  return (
    <nav className='flex w-full justify-between items-center px-5 py-7 bg-pale-aqua tracking-wide font-extralight font-slate-gray sticky top-0 z-10'>
      <div className='text-4xl'>
        <LinkItem data={{ slug: '/', content: ' 🐓 ' }} />
      </div>

      <ul className='grid grid-cols-5 text-sm'>
        {links.map((link: LinkData) => (
          <li key={link.slug}>
            <LinkItem data={link} />
          </li>
        ))}
      </ul>

      <div className='grid grid-cols-3 text-center'>
        <div>
          <LinkItem data={{ slug: 'account', content: 'Account' }} />
        </div>
        <div className='text-right'>🔎</div>
        <div>🛒</div>
      </div>
    </nav>
  );
}
