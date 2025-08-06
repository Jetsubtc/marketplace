import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Mint from './pages/Mint';
import Profile from './pages/Profile';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-solana-dark">
      <Navbar />
      <main className="pt-20">
        {/* Simple Test */}
        <div style={{color: 'white', textAlign: 'center', padding: '80px 20px', backgroundColor: 'red'}}>
          <h1 style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '16px'}}>🚨 SIMPLE TEST</h1>
          <p style={{fontSize: '24px', marginBottom: '32px'}}>If you can see this red box, the main content is working!</p>
          <div style={{backgroundColor: 'white', color: 'black', padding: '16px', borderRadius: '8px'}}>
            <p style={{fontSize: '14px'}}>This should be visible on the live site.</p>
          </div>
        </div>
      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1A1A1A',
            color: '#fff',
            border: '1px solid #9945FF',
          },
        }}
      />
    </div>
  );
}

export default App; 