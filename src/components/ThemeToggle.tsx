import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// Utility to get and set theme
const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    // Default to dark
    return "dark";
  }
  return "dark";
};

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme() as "light" | "dark");

  useEffect(() => {
    const root = window.document.body;
    if (theme === "dark") {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="absolute top-4 right-4"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
};

export default ThemeToggle; 
