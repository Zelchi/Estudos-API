import express from 'express';
const app = express();
app.use(express.json());

const port = 8000;

import Home from './src/routes/home.js';
app.use('/home', Home);

app.listen(port, () => {
    console.log(`Server está escutando na porta: ${port}`);
});