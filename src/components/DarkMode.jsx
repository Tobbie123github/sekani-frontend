import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load from localStorage (default to false if nothing saved)
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
   <></>
  );
}
