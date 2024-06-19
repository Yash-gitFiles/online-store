import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebaServices";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext(null);

export function useAuth() {
  return useContext(UserContext);
}

const initialState = JSON.parse(localStorage.getItem("user"));
function UserProvider({ children }) {
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;
