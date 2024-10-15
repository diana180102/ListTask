'use client';

import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useContext(AuthContext);
    const isAuth = localStorage.getItem('isAuthenticated') || null;
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated && (isAuth === 'false' || isAuth === null)) {
            router.push('/login');
        }
    }, [isAuthenticated]);

    return <>{isAuthenticated ? children : null}</>;
}
