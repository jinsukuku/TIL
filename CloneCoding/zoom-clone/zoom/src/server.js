import express from "express"
import http from "http"
import WebSocket from "ws"

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
const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen); 

// Create http server 
const server = http.createServer(app);
// Create ws server 
const wss = new WebSocket.Server({server});

// server listen
server.listen(3000, handleListen); 

console.log("HELLO NODE-WORLD");