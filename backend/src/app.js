import express from 'express';
import cors from 'cors';

// Importing routes using ES module syntax (Ensure .js extensions)
import paymentRoutes from './routes/paymentRoutes.js';
import productRoutes from './routes/productRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/payments', paymentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

export default app; // Exporting app as default for ES modules
