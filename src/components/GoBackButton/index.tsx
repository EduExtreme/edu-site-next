import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BackButton } from './styles';

export function GoBackButton() {
  return (
    <BackButton>
      <Link className="nav-link" href="/">
        <IoArrowBackOutline size={20} />
        Back
      </Link>
    </BackButton>
  );
}
