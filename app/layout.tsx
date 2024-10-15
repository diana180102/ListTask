import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { TaskProvider } from '../context/TaskContext';
import { DarkModeProvider } from '@/context/DarkModeProvider';
import Header from '@/components/Header';

export const metadata = {
  title: 'Aplicación de Lista de Tareas',
  description: 'Gestión de estado global con Context API',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <DarkModeProvider>
          <AuthProvider>
            <Header />
            <TaskProvider>{children}</TaskProvider>
          </AuthProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}