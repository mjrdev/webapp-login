import express from 'express';
import routes from './src/routes';
import mongoose from './src/database';

const app = express();

mongoose()
app.use(routes);

app.listen(3000, () => {
    console.log('[SERVER] Server ON');
});