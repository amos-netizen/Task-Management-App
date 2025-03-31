const { Task, User } = require('../models');

const resolvers = {
  Query: {
    tasks: async (_, { userId }) => {
      return await Task.findAll({ where: { userId } });
    },
  },
  Mutation: {
    createTask: async (_, { title, description, status, userId }) => {
      return await Task.create({ title, description, status, userId });
    },
    updateTask: async (_, { id, title, description, status }) => {
      const task = await Task.findByPk(id);
      if (!task) return null;
      task.title = title || task.title;
      task.description = description || task.description;
      task.status = status || task.status;
      await task.save();
      return task;
    },
    deleteTask: async (_, { id }) => {
      const task = await Task.findByPk(id);
      if (!task) return false;
      await task.destroy();
      return true;
    },
  },
};

module.exports = resolvers;
