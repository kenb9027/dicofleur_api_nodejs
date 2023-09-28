"use strict";

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
        await queryInterface.bulkInsert("Roles", [
            {
                title: "Admin",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Manager",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Writer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Teacher",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "Student",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: "User",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
