var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLList = require("graphql").GraphQLList;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;
var TodoModel = require("../../models/todo");
var todoType = require("../types/todo").todoType;

// Query
exports.queryType = new GraphQLObjectType({
  name: "Todos",
  fields: () => ({
    todos: {
      type: new GraphQLList(todoType),
      resolve: () => {
        const todos = TodoModel.find().exec();
        if (!todos) {
          throw new Error("Error");
        }
        return todos;
      }
    },
    todo: {
      type: todoType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (root, args) => {
        const todo = TodoModel.findById(args.id).exec();
        if (!todo) {
          throw new Error("Error");
        }
        return todo;
      }
    }
  })
});
