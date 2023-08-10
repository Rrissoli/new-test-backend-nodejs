import express from 'express'
import route from './routes';
import db from './config/mongoConnect';



db.on("error", console.log.bind(console, "Connection database Error"))
db.once("open", () => {
    console.log("conexão com o bancoe feita com sucesso")
})
const app = express()


app.use(express.json());
app.use(route);

export {app}