import React from "react";
import { graphql, compose } from "react-apollo";
import TodoUpdateForm from "../../components/todo-update-form/todo-update-form";
import { UPDATE_MUTATION, TODO_QUERY } from "../../queries/index";
import { ITodo } from "../../queries/todo.d";

export const TodoUpdateConnect: React.StatelessComponent<any> = props => (
  <TodoUpdateForm {...props} />
);

export const TodoUpdateContainer: React.ComponentClass<any> = compose(
  graphql(TODO_QUERY, {
    name: "todoQuery",
    options: (props: any) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(UPDATE_MUTATION, {
    name: "updateTodo",
    options: (props: any) => ({
      refetchQueries: [
        {
          query: TODO_QUERY,
          variables: {
            id: props.match.params.id
          }
        }
      ]
    })
  })
)(TodoUpdateConnect);
