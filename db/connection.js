import { Sequelize } from "sequelize";


/* Instancia objeto */

const db = new Sequelize(
    "ozytelbk", /* db name */
    "ozytelbk", /* Username */
    "a9wxJnU1rQnUu_8Lo0crpF-dXTFlnYmI", /* password */
    {
        host: "silly.db.elephantsql.com",
        dialect: "postgres",
        login: true
    }
);

export default db;