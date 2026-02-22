import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import InfiniteScrollPage from "./features/q1-infiniteScroll";
import JSONRendererPage from "./features/q2-uiTree";
import Autocomplete from "./features/q3-autocomplete";
import UsersContainer from "./features/q4-reusableCustomHook";
import Assignment5Routes from "./features/q5-roleBasedRoutingSystem";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Machine Coding Assignments</h1>

      <div className="card-container">
        <Link to="/q1" className="assignment-card">
          <h3>Assignment 1</h3>
          <p>Infinite Scroll</p>
        </Link>

        <Link to="/q2" className="assignment-card">
          <h3>Assignment 2</h3>
          <p>JSON Renderer</p>
        </Link>

        <Link to="/q3" className="assignment-card">
          <h3>Assignment 3</h3>
          <p>Autocomplete</p>
        </Link>

        <Link to="/q4" className="assignment-card">
          <h3>Assignment 4</h3>
          <p>Reusable Custom Hook</p>
        </Link>

        <Link to="/q5" className="assignment-card">
          <h3>Assignment 5</h3>
          <p>Role Based Routing</p>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Navigation */}
        <Route path="/" element={<Home />} target="_blank" />

        {/* Assignment 1 */}
        <Route path="/q1" element={<InfiniteScrollPage />} target="_blank" />

        {/* Assignment 2 */}
        <Route path="/q2" element={<JSONRendererPage />} target="_blank" />

        {/* Assignment 3 */}
        <Route path="/q3" element={<Autocomplete />} target="_blank" />

        {/* Assignment 4 */}
        <Route path="/q4" element={<UsersContainer />} target="_blank" />

        {/* Assignment 5 */}
        <Route path="/q5/*" element={<Assignment5Routes />} target="_blank" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
