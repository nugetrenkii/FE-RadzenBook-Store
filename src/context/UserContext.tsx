import React, { createContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  auth: boolean;
}

interface UserContextProps {
  user: User;
  loginContext: (username: string, token: string, role: string, fullName: string, email:string, numberPhone: string, adress:string) => void;
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

  const loginContext = (username: string, token: string, role: string, fullName: string, email:string, numberPhone: string, adress:string) => {
    setUser({ username, auth: true });
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('role', role);
     //Lưu các thông tin khác vào sessionStorage
     sessionStorage.setItem('fullName', fullName);
     sessionStorage.setItem('email', email);
     sessionStorage.setItem('numberPhone', numberPhone);
     sessionStorage.setItem('address', adress);
    //  sessionStorage.setItem('gender', JSON.stringify(gender));
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('fullName');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('numberPhone');
    sessionStorage.removeItem('address');
    // sessionStorage.removeItem('gender');
    setUser({ username: '', auth: false });
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
