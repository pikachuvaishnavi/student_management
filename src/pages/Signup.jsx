import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    qualification: "",
    interests: [],
    className: "",
    subject: "",
    marks: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleInterest = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setForm({
        ...form,
        interests: [...form.interests, value],
      });
    } else {
      setForm({
        ...form,
        interests: form.interests.filter(
          (item) => item !== value
        ),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(
      (user) =>
        user.email.toLowerCase() ===
        form.email.toLowerCase()
    );

    if (exists) {
      setError("This email is already registered.");
      return;
    }

    const newUser = {
      id: "STU" + String(users.length + 1).padStart(3, "0"),
      ...form,
    };

    localStorage.setItem(
      "users",
      JSON.stringify([...users, newUser])
    );

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div className="signup-page">

      <nav className="signup-navbar">

        <div className="signup-nav-container">

          <div className="signup-title">
            Student Signup
          </div>

          <div className="signup-links">

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

      <div className="signup-container">

        <div className="signup-box">

          <div className="signup-heading">
            Student Registration
          </div>

          {error && (
            <div className="signup-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <label>Name</label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label>Date of Birth</label>

            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              required
            />

            <label>Gender</label>

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                />
                Other
              </label>

            </div>

            <label>Qualification</label>

            <select
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Qualification
              </option>

              <option value="High School">
                High School
              </option>

              <option value="Bachelors">
                Bachelors
              </option>

              <option value="Masters">
                Masters
              </option>

            </select>

            <label>Interests</label>

            <div className="checkbox-group">

              <label>
                <input
                  type="checkbox"
                  value="Coding"
                  onChange={handleInterest}
                />
                Coding
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Design"
                  onChange={handleInterest}
                />
                Design
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Gaming"
                  onChange={handleInterest}
                />
                Gaming
              </label>

              <label>
                <input
                  type="checkbox"
                  value="Sports"
                  onChange={handleInterest}
                />
                Sports
              </label>

            </div>

            <label>Class</label>

            <input
              name="className"
              value={form.className}
              onChange={handleChange}
              required
            />

            <label>Subject</label>

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <label>Marks</label>

            <input
              type="number"
              name="marks"
              value={form.marks}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="signup-button"
            >
              Signup
            </button>

          </form>

        </div>

      </div>

      <footer className="signup-footer">
        Basic Coding Test - 1 | Signup | Task Document
      </footer>

    </div>
  );
}

export default Signup;