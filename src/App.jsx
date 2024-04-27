import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Header from "./components/layouts/header/Header";
import Logements from "./components/pages/logements/Logements";
import Contact from "./components/pages/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
