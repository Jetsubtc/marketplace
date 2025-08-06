import React from 'react';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-solana-dark">
      <Navbar />
      <main className="pt-20">
        {/* Main Content */}
        <div className="text-white text-center py-20">
          <h1 className="text-4xl font-bold mb-4">🎉 Solana NFT Marketplace</h1>
          <p className="text-xl mb-8">Welcome to the future of NFT trading!</p>
          <div className="bg-neon-purple/20 p-4 rounded-lg">
            <p className="text-sm">Your marketplace is now live and working!</p>
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