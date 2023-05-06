import express, { Application } from 'express';
import {connectAutocomplete, sendEvent} from '../controllers/autocomplete.controller';

export default function initRoutes(app: Application): void {
    const router = express.Router();
    router.get('/autocomplete', connectAutocomplete);
    router.post('/autocomplete', sendEvent)
    app.use(router);
}

