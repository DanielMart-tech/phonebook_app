const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://DanMart:${password}@cluster0.58g40.mongodb.net/phonebook-app?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

if (process.argv.length === 3) {
  Person.find({}).then((results) => {
    console.log("phonebook:");
    results.forEach((result) => console.log(result.name, result.number));
    mongoose.connection.close();
  });
} else {
  person.save().then((result) => {
    console.log(`Added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}
