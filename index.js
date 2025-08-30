import express from "express";
import dotEnv from "dotenv";

import {bookRouter} from "./src/routes/index.js"

const app = express();
dotEnv.config();

// Middleware
app.use(express.json());

// Routes
app.use('/api/books', bookRouter);
// app.use('/api/review', reviewRouter);

app.get('/', (req, res) => {
  res.send("Welcome to E-Library API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});