import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      navigate("/login");
      return;
    }

    setUser(currentUser);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="dashboard-page">

      <nav className="dashboard-navbar">

        <div className="dashboard-nav-container">

          <div className="dashboard-title">
            Student Dashboard
          </div>

          <div className="dashboard-links">

            <button onClick={() => navigate("/home")}>
              Home
            </button>

            <button onClick={() => navigate("/signup")}>
              Signup
            </button>

            <button onClick={() => navigate("/login")}>
              Login
            </button>

          </div>

          <button
            className="logout-button"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </nav>

      <div className="dashboard-container">


        <div className="welcome-banner">

          Welcome, {user.name} (User ID: #{user.id})

        </div>


        <div className="student-card">

          <div className="edit-container">

            <button className="edit-profile-button">
              Edit Profile
            </button>

          </div>

          <div className="student-details">

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

            <p>
              <strong>Date of Birth:</strong>{" "}
              {user.dob || "20/03/1994"}
            </p>

            <p>
              <strong>Gender:</strong>{" "}
              {user.gender || "Male"}
            </p>

            <p>
              <strong>Qualification:</strong>{" "}
              {user.qualification ||
                "High School, Bachelors, Master's"}
            </p>

            <p>
              <strong>Interests:</strong>{" "}
              {user.interests
                ? user.interests.join(" ")
                : "Coding, Design, Gaming, Sports"}
            </p>

            <p>
              <strong>Class:</strong>{" "}
              {user.className || "form-control"}
            </p>

            <p>
              <strong>Subject:</strong>{" "}
              {user.subject || "form-control"}
            </p>

            <p>
              <strong>Marks:</strong>{" "}
              {user.marks || "200"}
            </p>

            <p className="aadhaar-row">

              <strong>
                Aadhaar Document:
              </strong>

              <span className="pdf-icon">
                📄
              </span>

            </p>

          </div>

        </div>

      </div>


      <footer className="dashboard-footer">
        Basic Coding Test - 1 | Student Dashboard | Task Document
      </footer>

    </div>
  );
}

export default Home;