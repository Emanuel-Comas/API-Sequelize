import db from "../db/connection.js"
import { DataTypes } from "sequelize"

const Usuario = db.define("usuario", {
    nombre: {type: DataTypes.STRING},
    id: {type: DataTypes.INTEGER,
        primaryKey: true},
    edad: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING},
    telefono: {type: DataTypes.INTEGER}
},
{
    timestamps:false,
    tableName: "usuarios"
}
)

export default Usuario;