import  { Sequelize } from "sequelize";

export const sequelize = new Sequelize("postgres", "postgres", "Olenjude2020!", {
    dialect: "postgres",
    host: "db.vxinmbvlspqhcdusriua.supabase.co"
});