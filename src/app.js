import { openDB } from "./configDB.js";
import { createTable, insertPessoa, updatePessoa } from "./controller/pessoa.js";
import express from "express";

const app = express();
app.use(express.json());

createTable();

app.get('/', function(req, res){
  res.send("Hello Worldddddddddddddddd");
});

app.post('/pessoa', function(req, res){
  insertPessoa(req.body);
  res.json({
    "statusCode": 200,
  })
});

app.put('/pessoa', function(req, res){
  if(req.body && !req.body.id){
    res.json({
      "statusCode": 400,
      "msg": "Informe um ID"
    })
  }
  else{
    updatePessoa(req.body);
    res.json({
      "statusCode": 200,
    })
  }
});

app.listen(3000, () => console.log("API ta rodando"))