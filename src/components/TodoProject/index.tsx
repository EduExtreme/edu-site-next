import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoApp, TodoSection } from './styles';

export function TodoProject() {
  const [todoItem, setTodoItem] = useState('');
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      name: 'todo 01',
      isDone: false,
    },
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItems([
        {
          id: uuidv4(),
          name: todoItem,
          isDone: false,
        },
        ...items,
      ]);
      setTodoItem('');
    }
  };

  return (
    <TodoSection>
      <TodoApp>
        <h1>Todo APP</h1>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="add to-do task "
        />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </TodoApp>
      <ul>
        {items.map((id, name) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </TodoSection>
  );
}
