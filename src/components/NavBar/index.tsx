import Link from 'next/link';

export default function Navbar() {
  return (
    <Header>
      <nav>
        <span>
          <Link href="/">
            <b>Lucas</b> Viga
          </Link>
        </span>

        <ul>
          <li>
            <ActiveLink href="/education" activeClassName="nav-active">
              education
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/experience" activeClassName="nav-active">
              experience
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
