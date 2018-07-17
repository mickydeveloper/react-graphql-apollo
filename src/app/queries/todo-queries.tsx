import gql from "graphql-tag";
import { graphql } from "graphql";
import Query from "react-apollo/Query";
import Mutation from "react-apollo/Mutation";
export const TODOS_QUERY: Query | any = gql`
  {
    todos {
      id
      text
    }
  }
`;

export const TODO_QUERY: Query | any  = gql`
  query Todos($id: String!) {
    todo(id: $id) {
      text
    }
  }
`;

export const ADD_MUTATION: Mutation | any  = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;

export const UPDATE_MUTATION: Mutation | any  = gql`
  mutation updateTodo($id: String!, $text: String!) {
    updateTodo(id: $id, text: $text) {
      id
      text
    }
  }
`;

export const DELETE_MUTATION: Mutation | any  = gql`
  mutation removeTodo($id: String!) {
    removeTodo(id: $id) {
      id
      text
    }
  }
`;
