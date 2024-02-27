import Link from 'next/link';

const Nav = () => {
  return (
    <div className="text-white font-oswald">
      <ul className="flex gap-4 uppercase font-oswald">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>About Us</li>
        </Link>
        <Link href="/">
          <li>Accomodation</li>
        </Link>
        <Link href="/">
          <li>Conferences</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
        <Link href="/">
          <li>News</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
