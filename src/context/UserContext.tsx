import React, { createContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  auth: boolean;
}

interface UserContextProps {
  user: User;
  loginContext: (username: string, token: string, role: string) => void;
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
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('role', role);
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    setUser({ username: '', auth: false });
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
