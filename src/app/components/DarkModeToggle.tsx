import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  // Handle setting the theme on first load
  useEffect(() => {
    // This function will only be executed on the client side
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("color-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      className="text-sky-600 z-50  focus:outline-none  rounded-lg text-sm p-2.5"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <FaMoon
          id="theme-toggle-dark-icon"
          className="text-blue-700  w-5 h-5"
        />
      ) : (
        <FaSun
          id="theme-toggle-light-icon"
          className="text-blue-500  w-5 h-5"
        />
      )}
    </button>
  );
}
