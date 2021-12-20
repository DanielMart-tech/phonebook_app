const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

morgan.token("body", function getBodyInfo(req) {
  if (req.method === "POST") return JSON.stringify(req.body);
});

const app = express();

app.use(express.json());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));
app.use(cors());
app.use(express.static("build"));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/info", (request, response) => {
  let counter = 0;
  persons.forEach((person) => {
    counter += 1;
  });
  response.send(
    `<p>Phonebook has info for ${counter} people</p>
    <p>${Date()}</p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.send(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  const person = persons.find((person) => person.id === id);

  if (person) response.send(person);
  else response.status(404).end();
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  persons = persons.filter((person) => person.id !== id);

  response.status(202).end();
});

app.post("/api/persons", (request, response) => {
  let { name, number } = request.body;

  const repeatedName = persons.find((person) => person.name === name);

  if (!name || !number) {
    return response.status(400).json({
      error: "name and/or number missing",
    });
  } else if (repeatedName) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  const person = {
    name,
    number,
    id: Math.floor(Math.random() * 10000),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
