import { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("D");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("L");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Context.Provider value={{ theme, setTheme, handleThemeSwitch }}>
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
