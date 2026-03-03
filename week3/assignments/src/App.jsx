import { Routes, Route, NavLink } from "react-router-dom";

import ChatContainer from "./features/q1-liveStreamChat/ChatContainer";
import WindowSize from "./features/q2-useWindowSize";
import UserContainer from "./features/q3-reusableCustomHook";
import MultiStepForm from "./features/q4-multiStepForm";
import MouseTrackerContainer from "./features/q5-mouseTrackerPerformance";
import MortgageCalculator from "./features/q6-mortgageCalculator";
import LikeButton from "./features/q7-likeButton";

import "./App.css";

const projects = [
  {
    path: "/q1",
    title: "Live Stream Chat",
    description: "Real-time chat simulation with dynamic message rendering.",
  },
  {
    path: "/q2",
    title: "Window Size Hook",
    description: "Custom hook to track window resize events efficiently.",
  },
  {
    path: "/q3",
    title: "Reusable Custom Hook",
    description: "Reusable data-fetching hook with loading and error handling.",
  },
  {
    path: "/q4",
    title: "Multi Step Form",
    description: "Stepper-based form with validation and navigation logic.",
  },
  {
    path: "/q5",
    title: "Mouse Tracker",
    description: "Performance-optimized mouse tracking using refs.",
  },
  {
    path: "/q6",
    title: "Mortgage Calculator",
    description: "Loan EMI calculator with real-time calculations.",
  },
  {
    path: "/q7",
    title: "Like Button",
    description: "Async toggle button with API simulation and error handling.",
  },
];

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/q1" className="nav-link">
          Live Chat
        </NavLink>
        <NavLink to="/q2" className="nav-link">
          Window Size
        </NavLink>
        <NavLink to="/q3" className="nav-link">
          Reusable Hook
        </NavLink>
        <NavLink to="/q4" className="nav-link">
          Multi Step Form
        </NavLink>
        <NavLink to="/q5" className="nav-link">
          Mouse Tracker
        </NavLink>
        <NavLink to="/q6" className="nav-link">
          Mortgage Calculator
        </NavLink>
        <NavLink to="/q7" className="nav-link">
          Like Button
        </NavLink>
      </nav>

      {/* Content */}
      <div className="page-content">
        <Routes>
          {/* Home - Card Grid */}
          <Route
            path="/"
            element={
              <div className="cards-grid">
                {projects.map((project) => (
                  <NavLink
                    key={project.path}
                    to={project.path}
                    className="project-card"
                  >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </NavLink>
                ))}
              </div>
            }
          />

          {/* Individual Routes */}
          <Route path="/q1" element={<ChatContainer />} />
          <Route path="/q2" element={<WindowSize />} />
          <Route path="/q3" element={<UserContainer />} />
          <Route path="/q4" element={<MultiStepForm />} />
          <Route path="/q5" element={<MouseTrackerContainer />} />
          <Route path="/q6" element={<MortgageCalculator />} />
          <Route path="/q7" element={<LikeButton />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
