import Image from 'next/image';
import {
  HomeSection,
  ImageSection,
  ProfileContents,
  ProfileItem,
  SectionCards,
} from '../../styles/pages/home';

import devIcon from '../../public/images/Edudevs.png';
import Navbar from '../components/NavBar';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection>
        <ImageSection>
          <div className="img-item">
            <Image src={devIcon} alt="dev img" width={70} height={70} />
          </div>

          <div className="name-logo">
            <h1>EduExtreme</h1>
          </div>
        </ImageSection>

        <ProfileItem />
        <ProfileContents>
          <div className="profile-text">
            <h1>Hi, my name is Eduardo</h1>
            <span>Im Front-End React Developer</span>
          </div>
        </ProfileContents>
      </HomeSection>

      <SectionCards>
        <Card />
      </SectionCards>
    </>
  );
}
