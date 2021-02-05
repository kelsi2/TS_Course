import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  // This will automatically be assigned a type of 0 if we leave it with no assignment
  fetchTodos,
  deleteTodo,
}

// Defining type union here in case this grows. This saves us from continually defining more possible types in a type definition for a class
export type Action = FetchTodosAction | DeleteTodoAction;
