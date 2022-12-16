import styled from 'styled-components';

export const HomeSection = styled.section`
  background-image: url('/images/wave.svg');
  height: 80vh;
  background-size: cover;

  display: flex;
  flex-direction: column;

  padding: 2rem 4rem;
`;
export const ProfileItem = styled.div`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 100%;
  background-image: url('/images/Eduprofile.jpg');
  background-size: cover;
  transform: rotate(-22deg);
  @keyframes animatedProfile {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
  animation-name: animatedProfile;
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
export const ImageSection = styled.section`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;

  gap: 1rem;
  .img-item {
    @keyframes animatedicon {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
    }

    animation-name: animatedicon;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  .name-logo {
    h1 {
      color: white;
      animation-name: animatedProfile;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }
`;
export const SectionCards = styled.section`
  display: flex;
  justify-content: center;
  margin: -35rem -20rem 1rem 0rem;
`;
export const ProfileContents = styled.div`
  .profile-text {
    color: white;
    padding: 2rem 1rem;
    animation-name: animatedProfile;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
`;
