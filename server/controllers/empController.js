const Employee = require("../database/empConn.js");

exports.addEmp = async (req, res) => {
  let validate = false;
  let message = "";
  let feild = "";

  const invalidArgument = (err) => {
    validate = false;
    message = err.message;
    feild = err.feild;
  };

  await Employee.findOne({ email: req.body.email })
    .then((dbres) =>
      !dbres
        ? (validate = true)
        : invalidArgument({ feild: "email", message: "email already exits" })
    )
    .catch((err) => console.log("err: ", err));

  if (validate) {
    req.body.email.indexOf("@") !== -1
      ? (validate = true)
      : invalidArgument({ feild: "email", message: "invalid email" });
  }

  //name, email, job title, department, hire date, and contact information
  if (validate) {
    var employee = new Employee({
      name: req.body.name,
      email: req.body.email,
      jobtitle: req.body.jobtitle,
      department: req.body.department,
      hireDate: req.body.hireDate,
      mobile: req.body.mobile,
    });

    employee
      .save()
      .then(function (dbres) {
        res.status(201).send({ message: dbres.name + " was added in to db" });
      })
      .catch(function (err) {
        if (err.code == 11000) {
          res
            .status(400)
            .send({ feild: "email", message: "email already exists" });
        }
        console.log("Error:", err);
      });
  } else {
    res.status(400).send({ feild: feild, message: message });
  }
};

exports.findEmp = (req, res) => {
  Employee.findOne({ email: req.body.email })
    .then(function (dbres) {
      res.status(200).send({ message: "Employee found successful", dbres });
    })
    .catch((err) => {
      res.status(404).send({ message: "incorrect email" });
    });
};

exports.deleteEmp = (req, res) => {
  Employee.findOneAndDelete({ email: req.body.email })
    .then(function (dbres) {
      res.status(200).send({ message: "Employee found successful", dbres });
    })
    .catch((err) => {
      res.status(404).send({ message: "incorrect email" });
    });
};
