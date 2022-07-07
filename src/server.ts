import express, { Request, Response } from 'express';
import router from './routes';
import config from 'config';
import log from './log/logger';
import connection from './db/connection';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.listen(1337);
app.listen(port, host, () => {
    log.info(`Server listing on http://${host}:${port}`);

    connection();

    app.use(router);
});
