'use client'
import React, { useContext, useState, useEffect } from "react";

interface User {
  username: string;
  email: string;
  isVerified: string;
  token: string;
  userId: string;
}

interface AuthContextProps {
  currentUser: User | null | undefined;
}

const AuthContext = React.createContext<AuthContextProps>({
  currentUser: undefined,
});


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();


  const logout = () => {
    setCurrentUser(null);
    return;
  }

  const updateUser = async (userID: string) => {

  };
  useEffect(()=>{
    const my = {
        username: 'Toheed',
        email: 'string',
        token: 'string',
        isVerified: "false",
        userId: "dfsf"
    }
    setCurrentUser(my);
  },[])

  const value: AuthContextProps = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
