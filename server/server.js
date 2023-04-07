import dotenv from 'dotenv';
dotenv.config();
import db from './db.js';
import express from 'express';

// Nossa rotas

db();

const app = express();

app.use(express.json({
    verify: ((req, res, buf) => {
        req.rawBody = buf.toString();
    }),
    limit: '50mb'
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`O servidor está dorando na porta ${port}`));


