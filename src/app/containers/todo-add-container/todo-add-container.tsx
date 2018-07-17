import React from "react";
import { graphql, compose } from "react-apollo";
import TodoAddForm from "../../components/todo-add-form/todo-add-form";
import gql from "graphql-tag";
import { ADD_MUTATION, TODOS_QUERY } from "../../queries/index";
import { ITodo } from "../../queries/todo.d";

export const TodoAddConnect: React.StatelessComponent<any> = props => (
  <TodoAddForm {...props} />
);

export const TodoAddContainer: React.ComponentClass<any> = compose(
  graphql(ADD_MUTATION, {
    name: "addTodo",
    options: {
      update: (store, { data: added }) => {
        const data: any = store.readQuery({ query: TODOS_QUERY });
        data.todos.push(added && added.addTodo);
        store.writeQuery({ query: TODOS_QUERY, data });
      }
    }
  })
)(TodoAddConnect);
