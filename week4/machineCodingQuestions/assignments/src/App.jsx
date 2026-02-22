import InfiniteScrollPage from "./features/q1-infiniteScroll";
import "./App.css";
import JSONRendererPage from "./features/q2-uiTree";
import Autocomplete from "./features/q3-autocomplete";
import UsersContainer from "./features/q4-reusableCustomHook";
import AppRoutes from "./features/q5-roleBasedRoutingSystem/AppRoutes";
import { AuthProvider } from "./features/q5-roleBasedRoutingSystem/context/AuthContext";

function App() {
  return (
    <>
      {/* <InfiniteScrollPage />  */}
      {/* <JSONRendererPage />; */}
      {/* <Autocomplete /> */}
      {/* <UsersContainer /> */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;
