import React, { SyntheticEvent } from "react";
import { Redirect, Link } from "react-router-dom";
import { Field } from "redux-form";
import {
  ITodoUpdateFormProps,
  ITodoUpdateFormState
} from "./todo-update-form.d";
import { required } from "../../utils/validators/required";
import { STRINGS } from "../../utils/constants/strings";
import { ButtonStandard } from "../form/buttons/standard/buttons-standard";
import { TextInput } from "../form/fields/text/form-field-text";
import { ITodo } from "../../queries/todo.d";

export default class TodoForm extends React.Component<
  ITodoUpdateFormProps,
  ITodoUpdateFormState
> {
  constructor(props: ITodoUpdateFormProps) {
    super(props);

    this.state = {
      redirect: false,
      form: {
        text: this.props.todoQuery.todo ? this.props.todoQuery.todo.text : ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  public componentDidUpdate(): void {
    if (this.state.form.text === "") {
      this.setState({ form: { text: this.props.todoQuery.todo.text } });
    }
  }

  public render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>{STRINGS.FORM.HEADING.UPDATE}</h1>
        <form onSubmit={this.handleSubmit}>
          <TextInput
            title={STRINGS.FORM.TEXT}
            type="text"
            required={true}
            validate={required}
            input={{
              name: "text",
              value: this.state.form.text,
              onChange: e => this.setState({ form: { text: e.target.value } })
            }}
          />
          <ButtonStandard
            type="simple"
            text={STRINGS.BUTTONS.CANCEL}
            callback={this.handleCancel}
            valid={true}
          />
          <ButtonStandard
            className="button float-right create"
            text={STRINGS.FORM.UPDATE}
            callback={this.handleSubmit}
            valid={this.state.form.text !== ""}
          />
        </form>
      </div>
    );
  }

  private updateTodo(id: string, text: string): void {
    this.props
      .updateTodo({
        variables: { id, text }
      })
      .then(() => this.setState({ redirect: true }));
  }

  private handleSubmit(event: SyntheticEvent<HTMLButtonElement> | any): any {
    this.updateTodo(this.props.match.params.id, this.state.form.text);
  }

  private handleCancel(): void {
    this.setState({
      redirect: true
    });
  }
}
