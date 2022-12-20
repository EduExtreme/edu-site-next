import styled from 'styled-components';

export const CardSection = styled.section`
  padding: 4.625rem 0 0 0;
  height: 100vh;
`;
export const CardProfile = styled.div`
  .header-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 50px;
    color: var(--blue-900);
    border-radius: 1rem 1rem 0 0;
    background: var(--blue-100);
    gap: 0.3rem;

    .title-item-card {
      font-size: 1.5rem;
      padding: 0rem 0rem 0.5625rem 0rem;
    }
  }
  li {
    padding: 16px 2px;
    font-size: 1rem;
  }
  width: 18.75rem;
  height: 20.25rem;
  background: var(--blue-900);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
