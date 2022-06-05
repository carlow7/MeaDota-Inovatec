import express from "express"
import path from 'path';
import { router } from "./routes"
import cors from 'cors';

const app = express()

app.use(cors());
app.use(express.json())
app.use(router)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333,() => {
    return (console.log("Server running on port 3333"))
})