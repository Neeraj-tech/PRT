import { useState } from "react";
import Axios from "axios";
import Header from "./Header";

const AddEmp = function () {
  //name, email, job title, department, hire date, and contact information
  const [state, setState] = useState({
    name: "",
    email: "",
    jobtitle: "",
    department: "",
    hireDate: "",
    mobile: "",
  });
  const [error, setError] = useState({ email: "", password: "" });

  var fetch = function () {
    Axios.post("http://localhost:4000/addEmp", {
      name: state.name,
      email: state.email,
      jobtitle: state.jobtitle,
      department: state.department,
      hireDate: state.hireDate,
      mobile: state.mobile,
    })
      .then((res) => {
        alert(`${res.data.message} `);
      })
      .catch((err) => {
        setError({
          ...error,
          [err.response.data.feild]: err.response.data.message,
        });
      });
  };

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError({
      name: "",
      email: "",
      jobtitle: "",
      department: "",
      hireDate: "",
      mobile: "",
    });
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    fetch();
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h2> Add Employee Page</h2>
        <form onSubmit={handleSubmit} className="form-control needs-validation">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              {" "}
              Name{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="text"
              name="name"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              {" "}
              Email{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="email"
              name="email"
              className={
                error.email ? "form-control is-invalid" : "form-control"
              }
            ></input>
            <div className="invalid-feedback">{error.email} </div>
          </div>
          <div className="mb-3">
            <label htmlFor="jobtitle" className="form-label">
              {" "}
              Job Title{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="text"
              name="jobtitle"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              {" "}
              Department{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="text"
              name="department"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="hireDate" className="form-label">
              {" "}
              Hire Date{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="text"
              name="hireDate"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              {" "}
              Mobile Number{" "}
            </label>
            <input
              onChange={(evt) => onChangeHandler(evt)}
              type="text"
              name="mobile"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary mb-3">
              {" "}
              submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmp;
