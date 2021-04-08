import routes from "./src/routes/crmRoutes";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 4000;
// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);
//serving static files
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(`Node and express server running on port ${PORT}`);
});
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
