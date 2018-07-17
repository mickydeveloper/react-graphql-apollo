import React from "react";
import { Link } from "react-router-dom";
import { ITodoListProps } from "../../components/todo-list/todo-list.d";
import { TodoItem } from "../todo-item/todo-item";
import { STRINGS } from "../../utils/constants/strings";

export default class TodoList extends React.Component<ITodoListProps, {}> {
  constructor(props: ITodoListProps) {
    super(props);

    this.renderListItems = this.renderListItems.bind(this);
  }

  public render(): JSX.Element {
    if (this.props.todosQuery.loading) {
      return (
        <div className="todo-list">
          <div>Loading Todos</div>
        </div>
      );
    }
    return (
      <div className="todo-list">
        <h1>{STRINGS.TODOLIST.HEADING}</h1>
        {this.renderListItems()}
        <Link className="add-button" to="/new">
          +
        </Link>
      </div>
    );
  }

  private renderListItems(): JSX.Element {
    const { todos } = this.props.todosQuery;
    let todoList: JSX.Element[] = todos.map((todo, index) => (
      <TodoItem
        key={index}
        id={todo.id}
        text={todo.text}
        deleteTodo={this.props.deleteTodo}
      />
    ));
    return <div className="todo-list">{todoList}</div>;
  }
}
