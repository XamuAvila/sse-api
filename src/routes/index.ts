import express, { Application } from 'express';
import connectAutocomplete from '../controllers/autocomplete.controller';

export default function initRoutes(app: Application): void {
    const router = express.Router();
    router.get('/autocomplete', connectAutocomplete);
    app.use(router);
}

