import Image from 'next/image';
import {
  HomeSection,
  ImageSection,
  ProfileContents,
  Avatar,
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

          <h1 className="name-logo">EduExtreme</h1>
        </ImageSection>
        <div>
          <Avatar />
          <ProfileContents>
            <div className="profile-text">
              <h1>Hi, my name is Eduardo</h1>
              <span>Im Front-End React Developer</span>
            </div>
          </ProfileContents>
        </div>
        <Card />
      </HomeSection>

      <SectionCards>AAAAAAA</SectionCards>
    </>
  );
}
