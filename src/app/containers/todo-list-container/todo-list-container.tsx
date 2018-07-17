import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { DELETE_MUTATION, TODOS_QUERY } from "./../../queries/index";
//COMPONENTS
import TodoList from "../../components/todo-list/todo-list";

const TodoListConnect: React.StatelessComponent<any> = props => (
  <TodoList {...props} />
);

export const TodoListContainer: React.ComponentClass<{}> = compose(
  graphql(TODOS_QUERY, {
    name: "todosQuery"
  }),
  graphql(DELETE_MUTATION, {
    name: "deleteTodo",
    options: {
      update: (store, { data: deleted }) => {
        const data: any = store.readQuery({ query: TODOS_QUERY });
        const index: number = data.todos.findIndex(
          todo => todo.id === (deleted ? deleted.removeTodo.id : -1)
        );
        if (index > -1) {
          data.todos.splice(index, 1);
        }
        store.writeQuery({ query: TODOS_QUERY, data });
      }
    }
  })
)(TodoListConnect);
