import  { Sequelize } from "sequelize";

export const sequelize = new Sequelize("beers_db", "root", "password", {
    dialect: "mysql",
    host: "localhost"
});