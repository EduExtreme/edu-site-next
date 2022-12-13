import Image from 'next/image';
import { HomeSection, ImageSection } from '../styles/pages/home';
import devIcon from '../public/images/coding.png';

export default function Home() {
  return (
    <HomeSection>
      <ImageSection>
        <Image src={devIcon} alt="dev img" width={70} height={70} />
        <h1>Edudevs</h1>
      </ImageSection>
    </HomeSection>
  );
}
