import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import AddEmp from "./components/addEmp";
import EditEmp from "./components/editEmp";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/addEmp" element={<AddEmp />} />
            <Route path="/editEmp" element={<EditEmp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
