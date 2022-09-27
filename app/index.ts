import express from 'express';
import routes from './src/routes';
import mongoose from './src/database';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

mongoose()
app.use(routes);

app.listen(3000, () => {
    console.log('[SERVER] Server ON');
});