import express from "express";
import bodyParser from "body-parser";
import router from "./routes/beers.js";
import cors from "cors";
import { sequelize } from "./db/index.js";

const app = express();

const port = process.env.PORT | 5432;

sequelize.sync()
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(cors({
    allowedHeaders: '*'
}));

app.use("/api/beers", router);

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port)
});

app.get('/api', (req, res) => {
    res.send("welcome to my API");
});

