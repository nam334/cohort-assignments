import "./App.css";
import FormRenderer from "./features/q1-configDrivenForRenderer";
import Table from "./features/q2-reusableTableComponent";
import TreeView from "./features/q3-treeViewComponent";
import NotificationCenter from "./features/q4-serviceWorker";

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <FormRenderer /> */}
      {/* <TreeView /> */}
      {/* <Table /> */}
      <NotificationCenter />
    </>
  );
}

export default App;
