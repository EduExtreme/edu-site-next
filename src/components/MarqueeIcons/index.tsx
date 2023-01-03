import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import animatedJS from '../../../public/images/iconJs.svg';
import animatedCSS from '../../../public/images/iconsTs.svg';
import animatedTS from '../../../public/images/iconCss.svg';
import animatedGit from '../../../public/images/icongithub.gif';
import vsCode from '../../../public/images/iconsVscode.png';
import iconReact from '../../../public/images/iconReact.png';
import iconNext from '../../../public/images/nextJs.png';
import iconVercel from '../../../public/images/vercel.svg';
import iconStyled from '../../../public/images/styled-components.png';

import { Header } from './styles';

export default function MarqueeIcons() {
  return (
    <Marquee speed={60} pauseOnHover gradient gradientColor={[1, 14, 47]}>
      <Header>
        <div className="iconsdivide">
          <Image src={animatedGit} alt="dev img" width={50} height={50} />
          <Image src={iconNext} alt="dev img" width={50} height={50} />
          <Image src={animatedJS} alt="dev img" width={50} height={50} />
          <Image src={animatedTS} alt="dev img" width={50} height={50} />
          <Image src={animatedCSS} alt="dev img" width={50} height={50} />
          <Image src={vsCode} alt="dev img" width={50} height={50} />
          <Image src={iconReact} alt="reactimg" width={45} height={45} />
          <Image src={iconVercel} alt="reactimg" width={70} height={70} />
          <Image src={iconStyled} alt="reactimg" width={50} height={50} />
        </div>
      </Header>
    </Marquee>
  );
}
