'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const user = await queryInterface.rawSelect('Users', {
      where: {
        lastName: 'Doe',
        firstName: 'John',
      },
    }, ['id']);

    const roleAdmin = await queryInterface.rawSelect('Roles', {
      where: {
        title: 'Admin'
      },
    }, ['id']);

   await queryInterface.bulkInsert('RoleUsers', [
     {
      id: uuidv4(),
      UserId: user,
      RoleId: roleAdmin,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};