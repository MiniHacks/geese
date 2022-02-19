require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: { origin: "*" },
    path: "/express/socket.io",
});

const PORT = +process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("hello world :)");
});

io.on("connection", (socket) => {
    console.log({ id: socket.id, event: "connection" });
    socket.emit("message", "Connected to socket!");
    socket.emit("message", "ID: " + socket.id);
    socket.on("disconnect", (reason) => {
        console.log({ id: socket.id, event: "disconnect", reason });
    });
    socket.on("disconnecting", (reason) => {
        console.log({ id: socket.id, event: "disconnecting", reason });
    });
});

server.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
