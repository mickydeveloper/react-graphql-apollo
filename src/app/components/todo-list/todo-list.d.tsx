import { ITodo } from "./../../queries/todo.d";
export interface ITodoListProps {
  todosQuery: {todos: ITodo[], loading: boolean};
  getTodos: () => Promise<ITodo[]>;
  deleteTodo: (id: number) => Promise<any>;
  setCurrentTodo: (id:number, text:string) => Function;
}
