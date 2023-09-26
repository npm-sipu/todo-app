import { useAppSelector, useAppDispatch, AppDispatch } from "../store/store";
import { removeTodo, toggleTodo } from "../store/slices/todoSlice";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

const Homescreen = () => {
  const Todos = useAppSelector((state) => state.todos);

  const dispatch: AppDispatch = useAppDispatch();

  const handleToggleComplete = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className='bg-gray-200 p-4'>
      <h2 className='text-xl font-bold mb-4'>Todos List</h2>

      <TodoForm />

      {Todos.length === 0 ? (
        <p>No completed todos.</p>
      ) : (
        <ul>
          {Todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggleComplete={handleToggleComplete}
              onDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Homescreen;
