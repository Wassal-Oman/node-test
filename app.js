const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome To Wassal Node API</h1>');
});

app.listen(port, () => console.log(`Running on port ${port}`));