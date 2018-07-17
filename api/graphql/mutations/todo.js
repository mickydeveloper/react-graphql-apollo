const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const TodoType = require("../types/todo");
const TodoModel = require("../../models/todo");

const addTodo = {
  type: TodoType.todoType,
  args: {
    text: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const uModel = new TodoModel(params);
    const newTodo = uModel.save();
    if (!newTodo) {
      throw new Error("Error");
    }
    return newTodo;
  }
};

const updateTodo = {
  type: TodoType.todoType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLString)
    },
    text: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    return TodoModel.findByIdAndUpdate(
      params.id,
      { $set: { text: params.text } },
      { new: true }
    ).catch(err => new Error(err));
  }
};

const removeTodo = {
  type: TodoType.todoType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedtodo = TodoModel.findByIdAndRemove(params.id).exec();
    if (!removedtodo) {
      throw new Error("Error");
    }
    return removedtodo;
  }
};

module.exports = {
  addTodo,
  removeTodo,
  updateTodo
};
