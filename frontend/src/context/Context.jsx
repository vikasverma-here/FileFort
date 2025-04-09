import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState("viaks dfdfrf");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      files,
      setFiles,
      loading,
      setLoading,
    }}>
      {children}
    </AppContext.Provider>
  );
};
