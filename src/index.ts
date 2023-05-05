import express from 'express'; 
const app = express(); 

import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import initRoutes from './routes/index';

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); 


initRoutes(app); 
const PORT = +(process.env.PORT || 3005);
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
