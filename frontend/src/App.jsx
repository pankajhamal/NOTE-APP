
import Home from './pages/Home'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
  <Router>
    <Routes>
      {/* Public routes */}
      <Route path='/home' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Login/>}/>
    </Routes>
  </Router>
  )
}

export default App
