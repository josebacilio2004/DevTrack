import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Archive from './pages/Archive';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

function AppRoutes() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-lowest flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-2 border-primary-container border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-headline text-[10px] text-on-surface-variant tracking-widest uppercase">Syncing_Neural_Nodes...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <Login onLogin={() => {}} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="kanban" element={<Kanban />} />
          <Route path="profile" element={<Profile />} />
          <Route path="archive" element={<Archive />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
