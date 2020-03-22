import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import blogRoutes from './routes/blog.route'

const app = express();
const port = 3000;

const mongoDB = "mongodb://127.0.0.1/blog";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

//Bind connection to error event (to get notification of connection errors)
mongoose.connection.on("error", () => {
    console.error.bind(console, 'MongoDB connection error:')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(blogRoutes)
app.get("", (req, res) => {
  res.send("Hello World");
});

app.listen(port, err => {
  if (err) {
    console.log(
      `Cant connect to server because of the following error : ${err}`
    );
  }
  console.log(`Listening to port : ${port}`);
});
