import React from "react";
import { AiFillDelete, AiFillLike, AiOutlineLike } from "react-icons/ai";

interface TodoProps {
  id: number;
  text: string;
  completed?: boolean;
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({
  id,
  text,
  completed,
  onToggleComplete,
  onDeleteTodo,
}) => {
  return (
    <li className='flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md mb-2'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => onToggleComplete(id)}
        className='form-checkbox h-6 w-6 text-indigo-600'
      />
      <p
        className={`text-lg ${
          completed ? "line-through text-gray-500" : "text-gray-900"
        }`}
      >
        {text}
      </p>
      {completed ? (
        <AiFillLike className='text-green-500 text-xl' />
      ) : (
        <AiOutlineLike className='text-gray-500 text-xl' />
      )}
      <button
        className='text-red-600 hover:text-red-800 ml-auto'
        onClick={() => onDeleteTodo(id)}
      >
        <AiFillDelete />
      </button>
    </li>
  );
};

export default Todo;
