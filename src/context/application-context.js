import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [cartItem, setSelectedCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
  
    const value = {
    cartItem,
    setSelectedCartItems,
    selectedItems,
    setSelectedItems,
    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
  