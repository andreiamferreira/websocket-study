import express from "express";
import url from "url";
import path from "path";

const app = express();
const port = process.env.port || 3001;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectoy = path.join(currentPath, "../..", "public");
app.use(express.static(publicDirectoy));

app.listen(port, () => console.log("Servidor escutando"));