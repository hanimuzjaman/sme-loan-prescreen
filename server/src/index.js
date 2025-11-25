import express from 'express';
import dotenv from 'dotenv';
// import path from 'path';
import connectDB from './config/db.js';
// import authRoutes from './routes/auth.routes.js';
// import applicantRoutes from './routes/applicant.routes.js';
// import kycRoutes from './routes/kyc.routes.js';
// import businessRoutes from './routes/business.routes.js';
// import incomeRoutes from './routes/income.routes.js';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// static files (uploads)
// app.use('/uploads', express.static(path.join(process.cwd(), 'server', 'uploads')));

// api routes
// app.use('/api/auth', authRoutes);
// app.use('/api/applicants', applicantRoutes);
// app.use('/api/kyc', kycRoutes);
// app.use('/api/business', businessRoutes);
// app.use('/api/income', incomeRoutes);

// error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ success: false, message: err.message });
// });

const PORT = process.env.PORT || 8000;
connectDB(process.env.MONGODB_URI).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});