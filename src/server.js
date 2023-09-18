import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";


const app = express();
const port = process.env.port || 3001;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectoy = path.join(currentPath, "../..", "public");
app.use(express.static(publicDirectoy));

const serverHttp = http.createServer(app);

serverHttp.listen(port, () => console.log("Servidor escutando"));

const io = new Server(serverHttp);

io.on("connection", () => {
    console.log("Cliente se conectou");
});