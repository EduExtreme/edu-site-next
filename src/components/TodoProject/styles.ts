import styled from 'styled-components';

export const TodoSection = styled.section`
  margin: 64px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-200);
  width: 420px;
  height: 400px;
  border-radius: 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
export const TodoApp = styled.div`
  padding: 32px 32px;
  display: flex;
  flex-direction: column;

  .add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  }
  .update-task {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    margin-top: 8px;
  }

  h1 {
    text-align: center;
    color: white;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p {
    margin-top: 16px;
    text-align: center;
    color: white;
  }
`;
export const Input = styled.input`
  padding: 8px 24px;
  width: 224px;
  height: 50px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: var(--blue-700);
  border: none;
`;
export const Button = styled.button`
  padding: 10px 40px;
  width: 80px;
  height: 50px;
  background: var(--blue-100);
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
