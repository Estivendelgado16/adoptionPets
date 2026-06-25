import express from 'express';
import cors from 'cors';
import connectDB from './shared/database/connection.js';
import petRoutes from './src/modules/pets/pets.routes.js';
import storiesRoutes from './src/modules/stories/stories.routes.js';
import authRoutes from './src/modules/auth/auth.routes.js';
import { errorHandler } from './shared/middlewares/errorHandler.js';

const app = express();
app.use(cors());
app.use(express.json());


app.use((req, res, next) =>{
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
    });
    next();
})


app.use('/api/pets', petRoutes);
app.use('/api/stories', storiesRoutes)
app.use('/api/auth', authRoutes )


app.use(errorHandler);

const PORT = process.env.PORT || 3001;

async function start(){
    await connectDB();
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
}

start();