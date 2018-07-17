import * as React from "react";
import { shallow, mount } from "enzyme";
import TodoAddForm from "../todo-add-form";

describe("testing <TodoAddForm>", () => {
  it("the snapshot should match", () => {
    const todoForm = {
      match: { params: {}, isExact: true, path: "", url: ""}
    };
    const result = shallow(
      <TodoAddForm match={todoForm.match} addTodo={()=>new Promise(()=>{})} />
    );
    expect(result).toMatchSnapshot();
  });
});
