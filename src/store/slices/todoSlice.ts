import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newId = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      state.push({
        id: newId,
        text: action.payload,
        completed: false,
      });
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
        return state.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        });
      },
    removeTodo: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.findIndex((todo) => todo.id === action.payload);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
  },
});

export const selectIsCompleted = (state: Todo[], todoId: number): boolean => {
    const todo = state.find((t) => t.id === todoId);
    return todo ? todo.completed : false;
  };
  
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
