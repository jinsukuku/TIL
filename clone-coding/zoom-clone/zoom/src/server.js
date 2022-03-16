import express from "express"

const app = express(); // create app

// pug setting 
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// pug에 추가한 스크립트의 static 작업
app.use("/public", express.static(__dirname + "/public"));

// route
app.get("/", (req,res) => res.render("home"));
app.get("/*", (req,res) => res.redirect("/"));

// port settings
app.listen(3000); 

console.log("HELLO NODE-WORLD");