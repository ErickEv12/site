// server.js
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 CADASTRO
app.post("/cadastro", async (req, res) => {
  const { username, email, senha } = req.body;

  if (!username || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos obrigatórios." });
  }

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const sql = "INSERT INTO usuarios (username, email, senha) VALUES (?, ?, ?)";
  db.query(sql, [username, email, senhaCriptografada], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao cadastrar usuário." });
    }
    res.json({ sucesso: true, mensagem: "Usuário cadastrado com sucesso!" });
  });
});

// 🔹 LOGIN
app.post("/login", (req, res) => {
  const { username, senha } = req.body;

  const sql = "SELECT * FROM usuarios WHERE username = ?";
  db.query(sql, [username], async (err, resultados) => {
    if (err || resultados.length === 0) {
      return res.status(400).json({ erro: "Usuário não encontrado." });
    }

    const usuario = resultados[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    const updateSql = "UPDATE usuarios SET ultimo_login = NOW() WHERE id = ?";
    db.query(updateSql, [usuario.id]);

    res.json({ sucesso: true, mensagem: "Login realizado com sucesso!" });
  });
});

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));