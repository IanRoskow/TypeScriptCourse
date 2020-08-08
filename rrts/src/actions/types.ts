import { FetchTodosAction, DeleteTodoAction } from './todos';

//Don't need to define the right hand side because TS enum
//automatically gives it a unique integer
export enum ActionTypes {
    fetchTodos,
    deleTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
