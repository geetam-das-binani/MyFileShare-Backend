import express from "express";
import cors from "cors";
import{ router} from './routes/route.mjs'
import {connect} from './database/connection.mjs' 
const app = express();
app.use(cors());

connect()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',router)
app.listen(8000, () => console.log("Server is listening on port 8000"));
  