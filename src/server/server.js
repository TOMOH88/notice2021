const express = require('express');
const app = express();
const PORT = process.env.PORT || 8808;
const db = require('./config/db');

app.get('/api/products', (req, res) => {
    db.query("SELECT * FROM NOTICE", (err, data) => {
        if(!err) res.send({ products : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})