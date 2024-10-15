import DarkModeToggle from "./DarkModeToogle";

const Header = () => {
    return (
        <div className="navbar bg-gray-300 dark:bg-gray-600">
            <div className="flex-none">
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Header;
