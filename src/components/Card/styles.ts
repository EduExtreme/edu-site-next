import styled from 'styled-components';

export const CardSection = styled.section`
  display: flex;
  gap: 3rem;
  height: 100vh;
`;
export const CardProfile = styled.div`
  .header-card {
    width: 18.75rem;
    height: 12.5rem;
    border-radius: 1rem 1rem 0 0;
    background: var(--blue-100);
  }
  display: flex;
  flex-direction: column;
  width: 18.75rem;
  height: 31.25rem;
  background: var(--blue-900);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
