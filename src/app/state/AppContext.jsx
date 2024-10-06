'use client'
import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const topic = 'blog topic';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContext.Provider value={{topic,isMenuOpen, setIsMenuOpen}}>
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
