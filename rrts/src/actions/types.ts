import { FetchTodosAction, DeleteTodoAction } from './todos';

//Don't need to define the right hand side because TS enum
//automatically gives it a unique integer
export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
