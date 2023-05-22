import './App.css';
import Homepage from './Component/Homepage/Homepage';
import Signup from './Component/Signup/Signup';
import Signin from "./Component/Signin/Signin";
import CarDetails from "./Component/Homepage/Details/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route exact path="/Details/:id" element={<CarDetails />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
