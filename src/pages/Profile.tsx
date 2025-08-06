import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { User, Wallet, TrendingUp, Heart, Eye, Settings, LogOut } from 'lucide-react';
import NFTCard from '../components/NFTCard';

const Profile: React.FC = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const [activeTab, setActiveTab] = useState<'owned' | 'created' | 'favorites'>('owned');

  // Mock user data
  const userStats = {
    totalNFTs: 12,
    totalValue: '45.2 SOL',
    totalLikes: 234,
    totalViews: 1234,
  };

  // Mock owned NFTs
  const ownedNFTs = [
    {
      id: '1',
      name: 'Cosmic Dreamer #001',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
      price: '2.5 SOL',
      creator: '0x1234...5678',
      likes: 234,
    },
    {
      id: '2',
      name: 'Neon City #042',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
      price: '1.8 SOL',
      creator: '0x8765...4321',
      likes: 189,
    },
    {
      id: '3',
      name: 'Digital Artifact #789',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      price: '3.2 SOL',
      creator: '0x9876...5432',
      likes: 456,
    },
  ];

  const createdNFTs = [
    {
      id: '4',
      name: 'My Creation #001',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      price: '0.9 SOL',
      creator: 'You',
      likes: 123,
    },
  ];

  const favoriteNFTs = [
    {
      id: '5',
      name: 'Liked NFT #001',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
      price: '4.1 SOL',
      creator: '0x1111...2222',
      likes: 567,
    },
  ];

  const getCurrentNFTs = () => {
    switch (activeTab) {
      case 'owned':
        return ownedNFTs;
      case 'created':
        return createdNFTs;
      case 'favorites':
        return favoriteNFTs;
      default:
        return ownedNFTs;
    }
  };

  if (!connected) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="mb-6">
              <User className="h-16 w-16 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Connect Your Wallet</h3>
              <p className="text-gray-400">
                Connect your Solana wallet to view your profile and NFTs
              </p>
            </div>
            <div className="wallet-adapter-button-wrapper">
              <button className="btn-primary text-lg px-8 py-4">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="glass-card">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-teal rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neon-green rounded-full border-2 border-solana-dark"></div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-4 w-4" />
                      <span className="font-mono">
                        {publicKey?.toString().slice(0, 6)}...{publicKey?.toString().slice(-4)}
                      </span>
                    </div>
                    <span>•</span>
                    <span>Solana Network</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="btn-secondary flex items-center space-x-2">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </button>
                <button
                  onClick={() => disconnect()}
                  className="btn-secondary flex items-center space-x-2 text-red-400 hover:text-red-300"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Disconnect</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total NFTs', value: userStats.totalNFTs, icon: User, color: 'neon-purple' },
            { label: 'Portfolio Value', value: userStats.totalValue, icon: TrendingUp, color: 'neon-teal' },
            { label: 'Total Likes', value: userStats.totalLikes, icon: Heart, color: 'neon-pink' },
            { label: 'Total Views', value: userStats.totalViews, icon: Eye, color: 'neon-green' },
          ].map((stat, index) => (
            <div key={index} className="glass-card text-center">
              <div className={`flex justify-center mb-4 text-${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-solana-gray rounded-xl p-1">
            {[
              { id: 'owned', label: 'Owned', count: ownedNFTs.length },
              { id: 'created', label: 'Created', count: createdNFTs.length },
              { id: 'favorites', label: 'Favorites', count: favoriteNFTs.length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-neon-purple/20 text-neon-purple'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* NFTs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {getCurrentNFTs().length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentNFTs().map((nft, index) => (
                <NFTCard key={nft.id} nft={nft} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mb-6">
                <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  No {activeTab === 'owned' ? 'NFTs' : activeTab === 'created' ? 'Creations' : 'Favorites'} Found
                </h3>
                <p className="text-gray-400">
                  {activeTab === 'owned' 
                    ? "You haven't collected any NFTs yet"
                    : activeTab === 'created'
                    ? "You haven't created any NFTs yet"
                    : "You haven't favorited any NFTs yet"
                  }
                </p>
              </div>
              {activeTab === 'created' && (
                <button className="btn-primary">
                  Create Your First NFT
                </button>
              )}
            </div>
          )}
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <div className="glass-card">
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'Purchased', nft: 'Cosmic Dreamer #001', time: '2 hours ago', price: '2.5 SOL' },
                { action: 'Listed', nft: 'Neon City #042', time: '1 day ago', price: '1.8 SOL' },
                { action: 'Minted', nft: 'My Creation #001', time: '3 days ago', price: '0.9 SOL' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <div>
                      <p className="text-white font-medium">
                        {activity.action} <span className="text-neon-teal">{activity.nft}</span>
                      </p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-neon-purple font-medium">{activity.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile; 