// db.js
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // seu usuário MySQL
  password: "Escola",        // sua senha MySQL
  database: "formulario-erick"
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco:", err);
  } else {
    console.log("✅ Conectado ao banco de dados MySQL");
  }
});

export default db;
