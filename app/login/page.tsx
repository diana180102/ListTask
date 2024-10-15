'use client';

import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password);
        router.push('/');
    };

    return (
        <main className="container mx-auto p-8 min-h-screen dark:bg-black">
            <h1 className="text-4xl font-bold text-center dark:text-white">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6 mx-auto max-w-80 ">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input input-bordered input-success w-full "
                    placeholder="Usuario"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered input-success w-full "
                    placeholder="Contraseña"
                />
                <button type="submit" className="btn btn-neutral">
                    Ingresar
                </button>
            </form>
        </main>
    );
}
