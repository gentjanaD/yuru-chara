const express = require("express");
const cors = require("cors");
const router = require("./router")
const app = express();

const PORT = 4000;

app.use(cors()).use(express.json()).use(router);

app.listen(PORT, ()=> {
    console.log(`Listening on PORT 4000`);
})
