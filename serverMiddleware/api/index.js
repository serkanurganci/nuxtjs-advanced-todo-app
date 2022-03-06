const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
let todoJson = require('../todos.json')
const app = express()





const save = () => {
  fs.writeFile(
    "./serverMiddleware/todos.json",
    JSON.stringify(todoJson, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

app.get('/todos', (req,res)=>{
  res.json(todoJson)
})

app.post("/todos", bodyParser.json(), (req, res) => {
  todoJson.push(req.body);
  save();
  res.json({
    status: "success",
    stateInfo: req.body,
  });
});


app.put("/todos", bodyParser.json(), (req, res) => {
   todoJson = todoJson.map((state) => {
    if (state.id === req.body.id) {
      return req.body;
    } else {
      return state;
    }
  });
  save();
  res.json({
    status: "success",
    stateInfo: req.body,
  });
});

app.delete("/todos/:id", (req, res) => {
  const requestId = Number(req.params.id)
  todoJson = todoJson.filter((state) =>
    state.id !== requestId
  );
  save();
  res.json({
    status: "success",
    removed: req.params.name,
    newLength: todoJson.length,
  });
});
module.exports = app
