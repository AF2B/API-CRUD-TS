import mongoose from 'mongoose';
import config from 'config';
import log from '../log/logger';

const dbUri = config.get('dbUri') as string;

function connection() {
    mongoose.connect(dbUri).then((data) => {
        log.info("Conexão bem sucedida!");
        console.log(data);
    }).catch((error) => {
        log.info("Erro com a conexão...", error.message);
    });
}

export default connection;