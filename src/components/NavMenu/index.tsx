import Link from 'next/link';
import { NavContainer } from './styles';

export default function NavMenu() {
  return (
    <NavContainer>
      <div className="first-items">
        <nav>
          <ul>
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/education">
                Education
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/">
                Network
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavContainer>
  );
}
