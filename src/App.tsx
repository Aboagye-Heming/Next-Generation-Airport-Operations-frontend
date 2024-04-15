import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Assume you have a Dashboard component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
