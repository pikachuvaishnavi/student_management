import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Admin login
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      const admin = {
        id: "ADMIN",
        name: "Admin",
        email: email,
        role: "admin",
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(admin)
      );

      navigate("/home");
      return;
    }

    // Student login
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        ...user,
        role: "student",
      })
    );

    navigate("/home");
  };

  return (
    <div className="login-page">

      <nav className="top-navbar">

        <div className="nav-container">

          <div className="website-title">
            Unified Login
          </div>

          <div className="nav-links">

            <button onClick={() => navigate("/")}>
              Home
            </button>

            <button onClick={() => navigate("/signup")}>
              Signup
            </button>

            <button onClick={() => navigate("/login")}>
              Login
            </button>

          </div>

        </div>

      </nav>

      <div className="login-container">

        <div className="login-box">

          <div className="login-title">
            Account Login
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Email Address (email)"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Password (password)"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button
              type="button"
              className="forgot-button"
            >
              Forgot Password?
            </button>

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

        </div>

      </div>

      <footer>
        Basic Coding Test - 1 | Unified Login | Task Document
      </footer>

    </div>
  );
}

export default Login;