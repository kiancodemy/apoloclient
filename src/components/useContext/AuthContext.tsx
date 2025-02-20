import { createContext, useContext, useState, ReactNode } from "react";
import { useEffect } from "react";
interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "null");
    setuser(data);
  }, []);

  const [user, setuser] = useState<User | null>(null);

  const setUser = (data: User | null) => {
    setuser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
