import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Menu, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const { connected, publicKey } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Mint NFT', path: '/mint' },
    { name: 'My NFTs', path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="h-8 w-8 text-neon-purple" />
              <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-xl font-bold gradient-text">SolanaNFT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-neon-purple bg-white/5'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-neon-purple/10 rounded-lg border border-neon-purple/30"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Wallet Connection */}
          <div className="flex items-center space-x-4">
            {connected && publicKey && (
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-400">
                <span>Balance:</span>
                <span className="text-neon-teal font-mono">
                  {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
                </span>
              </div>
            )}
            
            <div className="wallet-adapter-button-wrapper">
              <WalletMultiButton className="btn-primary !bg-gradient-to-r !from-neon-purple !to-neon-teal !text-white !font-semibold !px-4 !py-2 !rounded-xl hover:!shadow-lg hover:!shadow-neon-purple/50 !transition-all !duration-300 !transform hover:!scale-105" />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'text-neon-purple bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {connected && publicKey && (
                <div className="px-4 py-2 text-sm text-gray-400">
                  <span>Wallet: </span>
                  <span className="text-neon-teal font-mono">
                    {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 