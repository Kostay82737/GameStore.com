const fs = require('fs');
const https = require('https');
const express = require('express');
const path = require('path');

const app = express();

// Пути к файлам сертификата
const options = {
    key: fs.readFileSync(path.join(__dirname, 'private.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certificate.crt'))
};

// Создаем HTTPS сервер
const server = https.createServer(options, app);

// Настройка статических файлов
app.use(express.static(__dirname));

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
const PORT = 443;
server.listen(PORT, () => {
    console.log(`HTTPS сервер запущен на порту ${PORT}`);
    console.log('Сертификат успешно установлен!');
    console.log('Сайт доступен по адресу: https://gamestore12.infyk.uk');
}); 