const app = require('express')();

app.use((req, res) => {
    res.send('hello');
});

app.listen(3000);