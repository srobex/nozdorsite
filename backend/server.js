// backend/server.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('API работает');
});

// Подключение маршрутов
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

// Подключение к базе данных и запуск сервера
sequelize.authenticate()
  .then(() => {
    console.log('Подключение к базе данных успешно');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Не удалось подключиться к базе данных:', err);
  });

  const userRoutes = require('./routes/userRoutes');
  app.use('/api/users', userRoutes);

  const characterRoutes = require('./routes/characterRoutes');
app.use('/api/characters', characterRoutes);

const newsRoutes = require('./routes/newsRoutes');
app.use('/api/news', newsRoutes);