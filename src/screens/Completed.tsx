import React from "react";
import { useAppSelector, useAppDispatch, AppDispatch } from "../store/store";
import { selectIsCompleted } from "../store/slices/todoSlice";
import { removeTodo, toggleTodo } from "../store/slices/todoSlice";
import Todo from "../components/Todo";

const CompletedTodos: React.FC = () => {
  const completedTodos = useAppSelector((state) =>
    state.todos.filter((todo) => selectIsCompleted(state.todos, todo.id))
  );

  const dispatch: AppDispatch = useAppDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className='bg-gray-200 p-4'>
      <h2 className='text-xl font-bold mb-4'>Completed Todos</h2>
      {completedTodos.length === 0 ? (
        <p>No todos.</p>
      ) : (
        <ul>
          {completedTodos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTodos;
