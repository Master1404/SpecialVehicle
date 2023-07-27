const express = require('express');
const app = express();
const port = 3000; // Вы можете использовать любой свободный порт

// Обработка GET-запроса для корневого маршрута
app.get('/', (req, res) => {
  res.send('Привет, это мой первый сервер на Express.js!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});