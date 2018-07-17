import * as React from "react";
import { shallow, mount } from "enzyme";
import TodoForm from "../todo-update-form";

describe("testing <TodoForm>", () => {
  it("the snapshot should match", () => {
    const todoForm = {
      todoQuery: { todo: { id: "35434tergdfg", text: "test" }, updateQuery: () => {}},
      match: { params: {}, isExact: true, path: "", url: ""}
    };
    const result = shallow(
      <TodoForm match={todoForm.match} updateTodo={()=>new Promise(()=>{})}  todoQuery={todoForm.todoQuery} />
    );
    expect(result).toMatchSnapshot();
  });
});
