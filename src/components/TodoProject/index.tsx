import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoApp, TodoSection } from './styles';
import {GrAdd} from 'react-icons/gr'
export function TodoProject() {
  const [todoTask, setTodoTask] = useState('');
  const [task, setTask] = useState([]);

  const handleAdd = () => {
    if (todoTask) {
      setTask([
        {
          id: uuidv4(),
          name: todoTask,
          isDone: false,
        },
        ...task,
      ]);
      setTodoTask('');
    }
  };

  const deleteTask = (index: number) => {
    task.splice(index, 1);
    setTask([...task]);
  };
  const editTask = (index) => {};

  console.log(task);
  return (
    <TodoSection>
      <TodoApp>
        <h1>Todo APP</h1>
        <div className='add-todo-app'>
        <input
          type="text"
          value={todoTask}
          onChange={(e) => setTodoTask(e.target.value)}
          placeholder="add a Task"
        />
        <button type="button" onClick={handleAdd}>
          <GrAdd />
        </button>
        </div>

        {task.length > 0 ? (
          <ul>
            {task.map((data, index) => (
              <li key={uuidv4()}>
                {data.name}
                <button type="button" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button type="button" onClick={() => editTask(index)}>
                  Concluir
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma Task Adicionada</p>
        )}
      </TodoApp>
    </TodoSection>
  );
}
