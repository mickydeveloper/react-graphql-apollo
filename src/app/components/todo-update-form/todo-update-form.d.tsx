import { ITodo } from "../../queries/todo.d";
import { match } from "react-router-dom";

export interface ITodoUpdateFormProps {
  updateTodo: (
    {
      variables: { id, text}
    }
  ) => Promise<ITodo>;
  todoQuery: { todo: ITodo, updateQuery: Function };
  match: match<any>;
}
export interface ITodoUpdateFormState {
  redirect: boolean;
  form: {
    text: string;
  };
}
