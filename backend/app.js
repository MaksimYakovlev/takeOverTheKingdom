import express from 'express';
import cors from 'cors';
import useMiddleware from './middleware/index.js';
import errorHandlers from './middleware/error-handlers.js';
import regionRouter from './routes/region.js';


const app = express();

app.use(cors());
useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/region', regionRouter);

// Обработка несуществующих запросов
errorHandlers(app);

export default app;