import React from "react";
import { Link } from "react-router-dom";
import { ITodoProps } from "./todo-item.d";
import { TODOS_QUERY } from "../../queries/index";

export const TodoItem: React.StatelessComponent<ITodoProps> = (
  props: ITodoProps | any
) => {
  const deleteTodo: (id: string) => void = (id: string) => {
    props.deleteTodo({
      variables: { id }
    });
  };

  return (
    <div className="todo-item">
      <Link to={"/update/" + props.id}>
        <h5>{props.text}</h5>
      </Link>
      <i className="fa fa-trash-o" onClick={() => deleteTodo(props.id)} />
    </div>
  );
};
