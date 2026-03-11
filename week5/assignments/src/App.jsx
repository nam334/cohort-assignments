import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

import FormRenderer from "./features/q1-configDrivenForRenderer";
import Table from "./features/q2-reusableTableComponent";
import TreeView from "./features/q3-treeViewComponent";
import NotificationCenter from "./features/q4-serviceWorker";

function App() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Config Driven Form",
      description: "Dynamic form renderer based on configuration.",
      route: "/form",
    },
    {
      title: "Reusable Table",
      description: "Reusable table component with pagination.",
      route: "/table",
    },
    {
      title: "Tree View",
      description: "Recursive tree view component.",
      route: "/tree",
    },
    {
      title: "Notification Center",
      description: "Service worker driven notifications.",
      route: "/notifications",
    },
  ];

  const Dashboard = () => (
    <div className="dashboard">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="card"
          onClick={() => navigate(feature.route)}
        >
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/form" element={<FormRenderer />} />
      <Route path="/table" element={<Table />} />
      <Route path="/tree" element={<TreeView />} />
      <Route path="/notifications" element={<NotificationCenter />} />
    </Routes>
  );
}

export default App;
