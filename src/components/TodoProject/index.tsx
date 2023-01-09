import { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GrAdd } from 'react-icons/gr';
import { Button, Input, TaskContent, TodoApp, TodoSection } from './styles';

interface Task {
  id: string;
  isDone: boolean;
  name: string;
}
const PreviousTasks = [
  {
    id: '1',
    isDone: false,
    name: 'Primeira Task',
  },
  {
    id: '2',
    isDone: false,
    name: 'Segunda Task',
  },
  {
    id: '3',
    isDone: false,
    name: 'Terceira Task',
  },
  {
    id: '4',
    isDone: false,
    name: 'Quarta Task',
  },
  {
    id: '5',
    isDone: false,
    name: 'Quinta Task',
  },
];

export function TodoProject() {
  const [inputTask, setInputTask] = useState('');

  const [tasks, setTasks] = useState<Task[]>(PreviousTasks);

  const handleAddNewTask = () => {
    if (inputTask) {
      const addsData = [...tasks];

      addsData.push({
        id: uuidv4(),
        name: inputTask,
        isDone: false,
      });

      setTasks(addsData);
      setInputTask('');
    }
  };

  // const deleteTask = (index: number) => {
  //   tasks.splice(index, 1);
  //   setTasks([...tasks]);
  // };
  const deleteTask = (id: string) => {
    const uptadeData = [...tasks];

    const findTaskItem = uptadeData.filter((task) => {
      return task.id !== id;
    });

    setTasks(findTaskItem);
  };

  const handleUpdateTask = () => {
    const updatedTodo = [...tasks];
  };

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
          <Button type="button" onClick={handleAddNewTask}>
            <GrAdd /> add
          </Button>
        </div>

        <div className="update-task">
          <Input type="text" />

          <Button type="button">Salvar</Button>

          <Button type="button" onClick={() => setInputTask(tasks[0].name)}>
            Cancel
          </Button>
        </div>

        {tasks.length > 0 ? (
          <TaskContent>
            {tasks.map((data) => (
              <Fragment key={data.id}>
                <p>{data.name}</p>
                <div>
                  {' '}
                  <Button type="button" onClick={() => deleteTask(data.id)}>
                    Delete
                  </Button>
                  <Button type="button" onClick={() => setInputTask(data.name)}>
                    EDIT TASK
                  </Button>
                </div>
              </Fragment>
            ))}
          </TaskContent>
        ) : (
          <p>Nenhuma Task Adicionada</p>
        )}
      </TodoApp>
    </TodoSection>
  );
}
