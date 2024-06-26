const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Phillipka!');
});

app.get('/hello', (req, res) => {
    res.send('Hello from /hello!');
});

app.post('/submit', (req, res) => {
    const { name, message } = req.body;
    res.send(` Name - ${name}, Message - ${message}`);
});

app.put('/update', (req, res) => {
    const { id, data } = req.body;
    res.send(` Обновлен ID ${id}: ${JSON.stringify(data)}`);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту http://localhost:${port}`);
});
