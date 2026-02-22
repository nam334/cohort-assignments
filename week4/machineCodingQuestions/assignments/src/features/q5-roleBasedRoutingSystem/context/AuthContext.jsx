import { createContext, useContext, useState } from "react";

//create context
const AuthContext = createContext();
//create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const login = (role) => {
    setUser({ role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook to consume context
export const useAuth = () => {
  return useContext(AuthContext);
};
