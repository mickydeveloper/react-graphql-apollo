import { match } from "react-router-dom";

export interface ITodoAddFormProps {
  addTodo: (
    {
      variables: { text: string }
    }
  ) => Promise<any>;
  match: match<any>
}
export interface ITodoAddFormState {
  redirect: boolean;
  form: {
    text: string;
  };
}
