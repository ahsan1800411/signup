require('dotenv').config();
require('express-async-errors');
const express = require('express');

const fileupload = require('express-fileupload');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const { PrismaClient } = require('@prisma/client');
const errorHandler = require('./middleware/errorMiddleware');

const prisma = new PrismaClient();

const port = process.env.PORT || 5500;

const app = express();

// Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// // middlewares
app.use(fileupload({ useTempFiles: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', require('./routes/authRoutes'));

app.use(errorHandler);

async function main() {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
