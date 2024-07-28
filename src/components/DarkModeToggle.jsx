import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.add('transition');
        document.documentElement.classList.add('duration-300');

        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        // Remove transition class after the transition is complete
        setTimeout(() => {
            document.documentElement.classList.remove('transition');
            document.documentElement.classList.remove('duration-300');
        }, 300);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-600 relative transition-colors duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            <div
                className={`absolute left-1 top-1 bg-white dark:bg-gray-800 w-6 h-6 rounded-full transform transition-transform duration-500 ease-in ${
                    isDarkMode ? 'translate-x-8' : ''
                }`}
            >
                {isDarkMode ? (
                    <Moon className="h-4 w-4 text-yellow-400 absolute top-1 left-1" />
                ) : (
                    <Sun className="h-4 w-4 text-yellow-400 absolute top-1 left-1" />
                )}
            </div>
        </button>
    );
};

export default DarkModeToggle;