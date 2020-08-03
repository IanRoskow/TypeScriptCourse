import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSesssion from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSesssion({ keys: ['laskdjf'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
