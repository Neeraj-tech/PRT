import { useState } from "react";
import Axios from "axios";
import Header from "./Header";

const EditEmp = function () {
  let [state, setState] = useState({ email: "", password: "" });
  let [error, setError] = useState("");
  let [emp, setEmp] = useState({
    name: "",
    email: "",
    jobtitle: "",
    department: "",
    hireDate: "",
    mobile: "",
  });

  let [toggle, setToggle] = useState(false);

  let fetch = function () {
    Axios.post("http://localhost:4000/findEmp", {
      email: state.email,
    })
      .then((res) => {
        alert("employee found successful");
        console.log(res.data.dbres.name);
        setEmp({
          name: res.data.dbres.name,
          email: res.data.dbres.email,
          jobtitle: res.data.dbres.jobtitle,
          department: res.data.dbres.department,
          hireDate: res.data.dbres.hireDate,
          mobile: res.data.dbres.mobile,
        });
        setToggle(true);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  const onChangeHandler = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
    setError("");
  };
  const handleSubmit = function (event) {
    event.preventDefault();
    fetch();
  };

  return !toggle ? (
    <div>
      <Header />
      <div className="container">
        <h2> Edit Employee Page</h2>
        <form onSubmit={handleSubmit} className="form-control needs-validation">
          <div className={error ? "is-invalid" : ""}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                {" "}
                Email{" "}
              </label>
              <input
                onChange={(evt) => onChangeHandler(evt)}
                type="email"
                name="email"
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="invalid-feedback">{error} </div>
          <button type="submit" className="btn btn-primary mb-3">
            {" "}
            submit{" "}
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div>
      <Header />
      <div className="container">
        <h2> Edit Employee Page</h2>
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
              value={emp.name}
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
              value={emp.email}
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
              value={emp.jobtitle}
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
              value={emp.department}
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
              value={emp.hireDate}
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
              value={emp.mobile}
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

export default EditEmp;
