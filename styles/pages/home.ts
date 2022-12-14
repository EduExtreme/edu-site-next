import styled from 'styled-components';

export const HomeSection = styled.section`
  display: flex;
  background-size: cover;
  text-align: center;
  width: 100%;
  padding: 2rem 4rem;
  color: white;

  .new-web-site-title {
    font-size: 60px;

    display: flex;
    justify-content: center;
    width: 100%;
    span {
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
      animation-duration: 5s;
      animation-iteration-count: infinite;
      color: var(--blue-200);
    }
  }
`;
export const Avatar = styled.div`
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
    color: white;
    animation-name: animatedProfile;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
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
