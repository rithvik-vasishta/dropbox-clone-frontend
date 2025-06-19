import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Upload from "./components/Upload/Upload";



function App() {
  return (
      <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow container mx-auto p-4">
              <Routes>
                  <Route path="/" element={<Navigate to="/login" replace />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/upload" element={<Upload />} />
                  {/* TODO: protected routes for profile, upload, search, download */}
              </Routes>
          </main>
          <Footer />
      </div>
  );
}

export default App;
