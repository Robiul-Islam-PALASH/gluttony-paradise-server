const express = require('express');
const cors = require("cors")

const app = express();
app.use(cors());

const allChefs = require("./data.json");

app.get('/', (req, res) => {
    res.json({message: "hello server running"});
});

app.get("/alldata", (req, res) => {
    res.send({allChefs})
})

app.listen(5000, () =>{
    console.log("server is running on poer 5000");
})
