const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    tasks(userId: Int!): [Task]
  }

  type Mutation {
    createTask(title: String!, description: String, status: String, userId: Int!): Task
    updateTask(id: Int!, title: String, description: String, status: String): Task
    deleteTask(id: Int!): Boolean
  }

  type Task {
    id: Int
    title: String
    description: String
    status: String
    userId: Int
  }
`;

module.exports = typeDefs;
