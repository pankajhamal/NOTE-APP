import Home from "./pages/Home";
import "./App.css";

// import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./pages/Signup.jsx";

function App() {
  return (

      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* <Route path='/signin' element={<Login/>}/> */}
        </Routes>
      </Router>
  );
}

export default App;
