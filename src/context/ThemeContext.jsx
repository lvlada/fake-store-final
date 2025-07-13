import { createContext, useContext, useState, useEffect } from "react";

// 1. Napravi ThemeContext
const ThemeContext = createContext();

// 2. Custom hook za lakši pristup
export const useTheme = () => useContext(ThemeContext);

// 3. Provider komponenta
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Provera localStorage prilikom učitavanja
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Promeni temu i upiši u localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
