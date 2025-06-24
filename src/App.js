import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Upload from "./components/Upload/Upload";
import { loadTokenFromCookie } from './services/auth.helper';
import ProtectedRoute from './components/Auth/ProtectedRoute';



function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = loadTokenFromCookie();
        if (token) {
            navigate('/upload');
        }
    }, [navigate]);
  return (
      <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow container mx-auto p-4">
              <Routes>
                  <Route path="/" element={<Navigate to="/login" replace />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/upload" element={
                      <ProtectedRoute>
                        <Upload />
                      </ProtectedRoute>
                  } />
                  {/* TODO: protected routes for profile, upload, search, download */}
              </Routes>
          </main>
          <Footer />
      </div>
  );
}

export default App;
