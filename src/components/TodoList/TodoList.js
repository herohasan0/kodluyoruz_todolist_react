import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  const [isChecked, setChecked] = useState(false);

  function toggleChecked(event) {
    const checked = isChecked;
    if (!checked) {
      event.target.classList.add('checked');
      setChecked(true);
    } else {
      event.target.classList.remove('checked');
      setChecked(false);
    }
  }

  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li
              onClick={toggleChecked}
              isChecked={isChecked}
              className="list-group-item"
            >
              <TodoItem {...todo} key={todo.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
