const express = require('express');
const app = express();
const port = 8000;

const home = require('./routes/home');
app.use('/', home);

app.listen(port, () => {
    console.log(`Server está escutando na porta: ${port}`);
});