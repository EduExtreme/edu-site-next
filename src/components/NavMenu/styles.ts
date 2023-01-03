import styled from 'styled-components';

export const NavContainer = styled.section`
  color: white;
  background: rgb(3, 2, 82);
  background: radial-gradient(
    circle,
    rgba(3, 2, 82, 1) 0%,
    rgba(0, 67, 221, 0.01724439775910369) 50%,
    rgba(3, 2, 82, 1) 100%
  );
  .first-items {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
    }
    li {
      display: flex;
      margin: 1rem 2rem;
    }
    .nav-link {
      text-decoration: none;
      color: white;
    }
  }
`;
