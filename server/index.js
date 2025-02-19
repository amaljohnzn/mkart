
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
require("dotenv").config();
const connectDB =require('./src/config/db')
const athroute =require('./src/routes/authroute')
const Customerroute =require('./src/routes/Customerroute')
const productRoute =require('./src/routes/ProductRoute')
var cors = require('cors')

connectDB ()

const PORT = process.env.PORT   

app.use(express.json());
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const allowedOrigins = ["http://localhost:5175", "https://mkart-frontend.vercel.app"];

app.use(cors({
  origin: (origin, callback) => {
    if (origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allow cookies if needed
}));
//app.use(cors({
  //origin: process.env.FRONTEND_URL,
  //credentials: true,      
//methods: ['GET', 'POST', 'PATCH', 'DELETE','PUT'],
  //allowedHeaders: ['Content-Type', 'Authorization']
//}));
app.use('/ath',athroute)
app.use('/Customer',Customerroute)
app.use('/product',productRoute)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





