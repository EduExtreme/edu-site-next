import styled from 'styled-components';

export const TodoSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--blue-200);
  width: 320px;
  height: 400px;
  border-radius: 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
export const TodoApp = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;

  .add-todo-app {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

  }

  h1 {
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  button {

    
    background-color: var(--blue-100);
    outline: none;
    border: none;
    width: 30px;
    border-radius: 3px;
    
    
  
  }

  p {
    margin-top: 1rem;
    text-align: center;
    color: white;
  }
`;
