const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log("Request made!");
//     res.send("WE GOT YOUR REQUEST!");
// })

// Routing 
app.get("/cats", (req, res) =>{
    res.send("MEOW")
})

app.get("/dogs", (req, res) =>{
    res.send("BORK")
})

app.get("/", (req, res) =>{
    res.send("HOME!!!")
    console.log("Directed to home page")
})

// Routing with patterns
app.get("/r/:subreddit", (req, res) =>{
    console.log(req.params);
    res.send("THIS IS A SUBREDDIT");
})

// Routing with queries
app.get("/search", (req,res) => {
    console.log(req.query);
    res.send("hi");
})

app.listen(3000, () => {
    console.log("listening on port 3000!");
})