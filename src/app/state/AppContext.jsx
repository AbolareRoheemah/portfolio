'use client'
import React, { useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const topic = 'blog topic';

  return (
    <AppContext.Provider value={{topic}}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};

export default AppContext;
