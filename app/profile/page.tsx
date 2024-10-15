'use client'

import { useEffect, useState } from "react";

const ProfiePage = () => {
    const [username, setUsername] = useState("");
    useEffect(() => {
        setUsername(localStorage.getItem('username') || "No fue seteado el username");
    }, []);

    return (
        <main className="container mx-auto p-8 min-h-screen max-w-full dark:bg-black">
            <h1 className="text-4xl font-bold text-center dark:text-white">Informacion de usario</h1>
            <p className="dark:text-white font-bold text-center mt-4 text-3xl">
                {username}
            </p>
        </main>
    );
}

export default ProfiePage;
