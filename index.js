const express = require('express');
const cookieParser = require('cookie-parser');
const cookieValidator = require('./cookieValidator');

const app = express();


app.use(cookieParser());
app.use(cookieValidator);

app.get('/', (req, res) => {
    res.send('Hello Hasib!');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(400).json({ error: err.message });
});

app.listen(3000, () => console.log("Server running on port 3000"));
