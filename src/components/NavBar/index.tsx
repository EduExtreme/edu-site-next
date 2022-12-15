import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import animatedJS from '../../../public/images/javascript-icon.gif';
import animatedCSS from '../../../public/images/iconsTs.svg';
import animatedTS from '../../../public/images/iconCss.svg';
import animatedDev from '../../../public/images/giphy.gif';

import { Header } from './styles';

export default function Navbar() {
  return (
    <Marquee>
      <Header>
        <div className="iconsdivide">
          <p>Edudevs</p>

          <Image src={animatedJS} alt="dev img" width={50} height={50} />
          <Image src={animatedTS} alt="dev img" width={50} height={50} />
          <Image src={animatedCSS} alt="dev img" width={50} height={50} />
          <Image src={animatedDev} alt="dev img" width={100} height={100} />
        </div>
      </Header>
    </Marquee>
  );
}
