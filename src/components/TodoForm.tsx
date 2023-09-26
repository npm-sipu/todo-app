import React, { useState } from "react";
import { useAppDispatch } from "../store/store";
import { addTodo } from "../store/slices/todoSlice";

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false); // State to control the empty message visibility

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
      setShowEmptyMessage(false);
    } else {
      setShowEmptyMessage(true);
    }
  };

  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Add a new todo'
        className='w-full p-2 border rounded'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className='bg-blue-500 text-white p-2 rounded mt-2'
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      {showEmptyMessage && (
        <p className='text-red-500 mt-2'>Please enter something.</p>
      )}
    </div>
  );
};

export default TodoForm;
