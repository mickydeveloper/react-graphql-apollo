import React, { SyntheticEvent } from "react";
import { Redirect, Link } from "react-router-dom";
import { ITodoAddFormProps, ITodoAddFormState } from "./todo-add-form.d";
import { required } from "../../utils/validators/required";
import { STRINGS } from "../../utils/constants/strings";
import { ButtonStandard } from "../form/buttons/standard/buttons-standard";
import { TextInput } from "../form/fields/text/form-field-text";

export default class TodoAddForm extends React.Component<
  ITodoAddFormProps,
  ITodoAddFormState
> {
  constructor(props: ITodoAddFormProps) {
    super(props);

    this.state = {
      redirect: false,
      form: {
        text: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  public render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1>{STRINGS.FORM.HEADING.CREATE}</h1>
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
            text={STRINGS.FORM.CREATE}
            callback={this.handleSubmit}
            valid={this.state.form.text !== ""}
          />
        </form>
      </div>
    );
  }

  private addTodo(text: string): void {
    this.props
      .addTodo({
        variables: { text }
      })
      .then(() => this.setState({ redirect: true }));
  }

  private handleSubmit(event: SyntheticEvent<HTMLButtonElement> | any): any {
    this.addTodo(this.state.form.text);
  }

  private handleCancel(): void {
    this.setState({
      redirect: true
    });
  }
}
