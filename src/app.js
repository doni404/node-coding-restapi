import cors from 'cors';
import express from 'express';
import { responseWithoutData } from './utils/helper_response.js';

import adminCMS from './routes/cms/admin.js';

// Defining the Express app
const app = express();

// Enabling CORS for all request
app.use(cors());

// Use express JSON format
app.use(express.json({
    limit: '20mb',
}));

// Declaring root endpoint
app.get('/', (req, res) => {
    res.send('CODING API v1');
});

// v1 cms
app.use('/v1/cms/admins', adminCMS);

// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).send(responseWithoutData('error', 'Invalid endpoint url'));
});

export default app;