const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
const users = [];
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users/", (req, res) => {
  const { user_name, name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    user_name: user_name,
    name: name,
    email: email,
  };
  users.push(newUser);
  res.json(users);
});
app.get("/users/:id/", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  res.json(user);
});
app.put("/users/:id", (req, res) => {
  const { user_name, name, email } = req.body;
  const { id } = req.params;
  let index = users.findIndex((user) => user.id == id);
  users[index].user_name = user_name;
  users[index].name = name;
  users[index].email = email;
  res.json(users);
});
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  let index = users.findIndex((user) => user.id == id);
  users.splice(index, 1);
  res.json(users);
});
app.listen(3001, () => console.log("Server run on port number 3001"));
