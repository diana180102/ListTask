import Link from "next/link";
import DarkModeToggle from "./DarkModeToogle";

const Header = () => {
    return (
        <div className="navbar bg-gray-300 dark:bg-gray-600">
            <Link
                href={'/'}
                className="btn btn-ghost sm:text-xl mr-4 dark:text-white">
                Home
            </Link>
            <Link
                href={'/profile'}
                className="btn btn-ghost sm:text-xl mr-4 dark:text-white">
                profile
            </Link>
            <div className="flex-none">
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Header;
