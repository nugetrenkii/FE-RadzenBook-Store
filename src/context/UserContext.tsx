import React, { createContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  auth: boolean;
}

interface UserContextProps {
  user: User;
  loginContext: (email: string, token: string, role: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextProps>({
  user: { username: '', auth: false },
  loginContext: () => {},
  logout: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ username: '', auth: false });

  const loginContext = (username: string, token: string, role: string) => {
    setUser({ username, auth: true });
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setUser({ username: '', auth: false });
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
