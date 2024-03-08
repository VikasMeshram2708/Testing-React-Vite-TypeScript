import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Math.floor(1000 + Math.random() * 9000),
        todo: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
