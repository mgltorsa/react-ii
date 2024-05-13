import { useDispatch, useSelector } from "react-redux";
import { actions } from "../slices/todoListSlice";
import { useState } from "react";
const TodoList = () => {
  const [newTaskName, setNewTaskName] = useState();
  //state=store
  const todoList = useSelector((state) => {
    console.log("STATE", state);

    return state.todos.todoList;
  });

  const dispatch = useDispatch();

  const handleNuevaTarea = () => {
    if (!newTaskName) {
      return;
    }
    dispatch(actions.ADD(newTaskName));
  };

  return (
    <div>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index.toString()}>
            <p>{todoItem}</p>
          </li>
        ))}
      </ul>
      <input
        onChange={(evt) => setNewTaskName(evt.target.value)}
        placeholder="Nueva tarea..."
      />
      <button onClick={handleNuevaTarea}>Agregar</button>
    </div>
  );
};

export default TodoList;
