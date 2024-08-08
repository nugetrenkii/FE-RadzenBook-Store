import React, { createContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  auth: boolean;
}

interface UserContextProps {
  user: User;
  loginContext: (email: string, token: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: { email: '', auth: false },
  loginContext: () => {},
  logout: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ email: '', auth: false });

  const loginContext = (email: string, token: string) => {
    setUser({ email, auth: true });
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUser({ email: '', auth: false });
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
