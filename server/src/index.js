import express from 'express';
import router  from './routers';
import cors    from 'cors';

const PORT = process.env.NODE_PORT || 9634;
const app = express();

app.use( cors() );
app.use( express.json() );
app.use('/public', express.static('public'));
app.use(express.static('dist'));
app.use( router );
require('./config/swagger');

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );