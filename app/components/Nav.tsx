import { Link } from '@remix-run/react';

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

  return <Link to={slug}>{content}</Link>;
}

export default function Nav() {
  return (
    <nav className='flex w-full border-2 justify-between items-center px-5 py-5 font-extralight'>
      <div className='text-4xl'>
        <LinkItem data={{ slug: '/', content: ' 🐓 ' }} />
      </div>

      <ul className='flex gap-5 tracking-wide '>
        {links.map((link: LinkData) => (
          <li key={link.slug}>
            <LinkItem data={link} />
          </li>
        ))}
      </ul>

      <div className='flex gap-5'>
        <div>
          <LinkItem data={{ slug: 'account', content: 'Account' }} />
        </div>
        <div>🔎</div>
        <div>🛒</div>
      </div>
    </nav>
  );
}
