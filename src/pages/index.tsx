import Image from 'next/image';
import {
  HomeSection,
  ImageSection,
  SectionCards,
} from '../../styles/pages/home';
import devIcon from '../../public/images/coding.png';
import Navbar from '../components/NavBar';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection>
        <ImageSection>
          <Image src={devIcon} alt="dev img" width={70} height={70} />
          <h1>Edudevs</h1>
        </ImageSection>
      </HomeSection>
      <SectionCards>
        <Card />
      </SectionCards>
    </>
  );
}
