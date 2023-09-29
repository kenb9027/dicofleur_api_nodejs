'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
const constante = require('../../utils/constantes.utils.js');

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
    const pwd = await bcrypt.hash("12341234", constante.SALT_HASH_KEY);
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        firstName:"John",
        lastName:"Doe",
        nickName:"JoDoe",
        password: pwd,
        phone:"0601020304",
        email: "john.doe@yopmail.com",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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