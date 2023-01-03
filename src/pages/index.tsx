import Image from 'next/image';
import {
  HomeSection,
  ImageSection,
  ProfileContents,
  Avatar,
} from '../../styles/pages/home';

import devIcon from '../../public/images/Edudevs.png';
import NavMenu from '../components/NavMenu';
import { GoBackButton } from '../components/GoBackButton';

export default function Home() {
  return (
    <>
      <HomeSection>
        <div>
          <ImageSection>
            <div className="img-item">
              <Image src={devIcon} alt="dev img" width={70} height={70} />
            </div>

            <h1 className="name-logo">EduExtreme</h1>
          </ImageSection>

          <Avatar />
          <ProfileContents>
            <div className="profile-text">
              <h1>Hi, my name is Eduardo</h1>
              <span>Im Front-End React Developer</span>
            </div>
          </ProfileContents>
        </div>
        <div className="new-web-site-title">
          <h1>
            Its <span>TIME</span> for a New <span>WEBSITE</span>
          </h1>
        </div>
      </HomeSection>
    </>
  );
}
