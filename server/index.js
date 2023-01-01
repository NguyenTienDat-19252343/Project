const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const ImportData = require("./dataImport");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoute = require("./routes/admin");





dotenv.config();



// Connet mongo user
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to mongodb...");
});
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(cors());
app.use(cookieParser());
app.use(express.json());



// import products
app.use("/api/import", ImportData);


//get products
app.use("/api/products", productRoutes);


//get orders
app.use("/api/orders", orderRoutes);

// get blog



//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);


// Admin
app.use("/admin/auth", adminRoute);


// Delete product
app.use("/api/delete", productRoutes);

//update
app.use("/api/update", productRoutes)









const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}...`);
});


