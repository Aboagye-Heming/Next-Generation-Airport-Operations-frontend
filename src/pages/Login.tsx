import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/login-img.png";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Hardcoded credentials for demonstration
  const validUsername = "admin";
  const validPassword = "password";

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    if (username === validUsername && password === validPassword) {
      console.log("Login successful");
      navigate('/dashboard'); 
    } else {
      alert("Invalid username or password");
      console.log("Login failed");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="container-fluid wrapper">
      <div className="row d-flex align-items-center justify-content-between">
        <div className="col-lg-6 form d-flex align-items-center justify-content-between">
          <div className="form__inner ml-3">
            <h1 className="form__title">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3 ml-3">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block image-wrapper" style={{ height: "100vh" }}>
          <img src={logo} alt="logo" className="img-fluid w-100 h-100" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
