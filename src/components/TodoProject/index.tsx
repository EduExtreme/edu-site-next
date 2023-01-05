import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GrAdd, GrTask } from 'react-icons/gr';
import { Button, Input, TodoApp, TodoSection } from './styles';

export function TodoProject() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (inputTask) {
      setTasks([
        {
          id: uuidv4(),
          name: inputTask,
          isDone: false,
        },
        ...tasks,
      ]);
      setInputTask('');
    }
  };

  const deleteTask = (index: number) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };
  const editTask = (index) => {
    const updatedTodo = {
      id: tasks.id,
      name: tasks.name,
      isDone: tasks.isDone,
    };
    setInputTask(updatedTodo);
  };
  console.log('LISTA DE TAREFAS', tasks);

  return (
    <TodoSection>
      <TodoApp>
        <h1>TODO LIST</h1>
        <div className="add-task">
          <Input
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="add a Task"
          />
          <Button type="button" onClick={handleAdd}>
            <GrAdd /> add
          </Button>
        </div>
        <div className="update-task">
          <Input value={inputTask.name} onChange={(e) => editTask(e)} />
          <Button
            type="button"
            onChange={(index) => setInputTask(index.target.value)}
          >
            Update
          </Button>
          <Button type="button">Cancel</Button>
        </div>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((data, index) => (
              <p key={uuidv4()}>
                {data.name}
                <Button type="button" onClick={() => deleteTask(index)}>
                  Delete
                </Button>
                <Button
                  type="button"
                  onClick={() =>
                    setInputTask({
                      id: data.id,
                      name: data.name,
                      isDone: false,
                    })
                  }
                >
                  EDIT TASK
                </Button>
              </p>
            ))}
          </div>
        ) : (
          <p>Nenhuma Task Adicionada</p>
        )}
      </TodoApp>
    </TodoSection>
  );
}
