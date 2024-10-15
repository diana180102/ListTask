'use client'

import { useDarkMode } from "@/context/DarkModeProvider";

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="btn btn-neutral"
        >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
