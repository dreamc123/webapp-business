import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import AthleteDetail from './pages/AthleteDetail';
import CampaignDetail from './pages/CampaignDetail';
import { useFirebaseAuth } from './hooks/useFirebaseAuth';

function App() {
  const { isAuthenticated, login, logout, error, loading } = useFirebaseAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthForm onLogin={login} error={error} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard onLogout={logout} />} />
        <Route path="/athletes/:id" element={<AthleteDetail />} />
        <Route path="/campaigns/:id" element={<CampaignDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;