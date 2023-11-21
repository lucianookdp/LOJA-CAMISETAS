import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";
import cookieParser from 'cookie-parser';
import session from 'express-session';
import moment from 'moment-timezone';
import fs from 'fs/promises';
import { findUser, verifyUser } from './public/js/users.js'

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '123456789',
  resave: false,
  saveUninitialized: true
}));


app.post('/login', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (await verifyUser(username, password)) {
    req.session.user = { username };
    res.redirect('/main.html');
  } else {
    res.send('Credenciais inválidas');
  }
});

app.get('/test-session', (req, res) => {
  if (req.session.user) {
    res.send(`Usuário logado: ${req.session.user.username}`);
  } else {
    res.send('Nenhum usuário logado');
  }
});

// Middleware para garantir que o usuário está logado
function ensureLoggedIn(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login.html');
  }
}

app.get("/", (req, res) => {
  res.sendFile("login.html", { root: "public" });
});

app.get('/main.html', ensureLoggedIn, (req, res) => {
  res.sendFile("main.html", { root: "public" });
});

app.get("/cart.html", (req, res) => {
  const now = new Date();
  res.cookie('lastCartPageVisit', now.toISOString(), { httpOnly: true });
  res.sendFile("cart.html", { root: "public" });
});

app.get("/success.html", (req, res) => {
  res.sendFile("success.html", { root: "public" });
});

app.post('/add-to-cart', (req, res) => {
  const nowInBrasilia = moment.tz(new Date(), 'America/Sao_Paulo').format();
  res.cookie('lastItemAddedAt', nowInBrasilia, { maxAge: 900000, httpOnly: true });
  console.log('Item Adicionado ao Carrinho à: ', nowInBrasilia);
  res.status(200).send('Item Adicionado ao Carrinho');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo Deu Errado!');
});

app.post('/save-order', async (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Usuário não autenticado' });
  }

  const username = req.session.user.username;
  const orderData = { ...req.body, username }; // Inclui o nome de usuário no pedido

  try {
    const fileName = `orders/order-${username}-${Date.now()}.json`;
    await fs.writeFile(fileName, JSON.stringify(orderData, null, 2));
    res.status(200).json({ message: 'Pedido salvo com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar o pedido:', error);
    res.status(500).json({ message: 'Erro ao processar o pedido' });
  }
});

app.listen(3000, () => {
  console.log("Servidor online na porta 3000!!");
});

export default app;
