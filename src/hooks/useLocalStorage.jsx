import { useState } from "react";

const useLocalStorage = () => {
  const getDefaultLayout = () => {
    const defaultLayout = localStorage.getItem("layout");
    return defaultLayout ? defaultLayout : "TABLE";
  }; 

  const [state, setState] = useState(getDefaultLayout);

  const toggleLayout = () => {
    setState((prev) => {
      const newLayout = prev === "TABLE" ? "GRID" : "TABLE";
      localStorage.setItem("layout", newLayout);
      return newLayout;
    });
  };

  return [state, toggleLayout];
};

export default useLocalStorage;
