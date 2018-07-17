import * as React from "react";
import { shallow, mount } from "enzyme";
import TodoList from "../todo-list";

describe("testing <TodoForm>", () => {
  it("the snapshot should match", () => {
    const todoList = {
      todosQuery: { todos: [{ id: "35434tergdfg", text: "test" }, {id: "35434tergdfgyrt", text: "test 2" }], loading: false},
    };
    const result = shallow(
      <TodoList setCurrentTodo={(id, text)=> () => {}} deleteTodo={()=>new Promise(()=>{})} getTodos={()=>new Promise(()=>{})}  todosQuery={todoList.todosQuery} />
    );
    expect(result).toMatchSnapshot();
  });
});
