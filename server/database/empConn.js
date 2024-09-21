const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(function (res) {
    console.log("DB Connected");
  })
  .catch(function (err) {
    console.log("Error connecting DB", err);
  });

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//name, email, job title, department, hire date, and contact information
const Employee = mongoose.model(
  "employees",
  new Schema({
    id: ObjectId,
    name: String,
    email: { type: String, unique: true },
    jobtitle: String,
    department: String,
    hireDate: String,
    mobile: String,
  })
);

module.exports = Employee;
