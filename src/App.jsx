import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explores from "./pages/Explores";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Explores/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    <Navbar/>
    </Router>
    </>
  )
}
export default App