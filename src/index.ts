import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express from 'express';
import cors from 'cors';
import bodyPaser from 'body-parser';
import session from 'express-session'


createConnection().then(async connection => {
}).catch(error => console.log(error));

const app = express();
app.use(bodyPaser.json())

app.use(
    cors({
        origin : "*",
        methods: ["GET","POST","OPTHINS" ,"PUT", "PETCH"],
        credentials:true
    })
)

app.use(
    session({
        secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    })
)


app.listen(3000)