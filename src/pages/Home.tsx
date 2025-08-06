import React from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Sparkles } from 'lucide-react';
import NFTCard from '../components/NFTCard';

const Home: React.FC = () => {
  const { connected } = useWallet();

  // Mock featured NFTs data
  const featuredNFTs = [
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
    {
      id: '4',
      name: 'Quantum Pixel #156',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      price: '0.9 SOL',
      creator: '0x5432...8765',
      likes: 123,
    },
  ];

  const stats = [
    { label: 'Total Volume', value: '2.4M SOL', icon: TrendingUp },
    { label: 'Active Users', value: '12.5K', icon: Users },
    { label: 'NFTs Minted', value: '45.2K', icon: Sparkles },
  ];

  return (
    <div className="min-h-screen">
      {/* Debug Section */}
      <div className="text-white text-center py-20 bg-red-500">
        <h1 className="text-4xl font-bold mb-4">🔍 DEBUG: Home Component</h1>
        <p className="text-xl mb-8">If you can see this red box, the Home component is working!</p>
        <div className="bg-white text-black p-4 rounded-lg">
          <p className="text-sm">This should be visible on the live site.</p>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">Discover</span>
                <br />
                <span className="text-white">Digital Art on</span>
                <br />
                <span className="gradient-text">Solana</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The fastest, most affordable NFT marketplace on Solana. 
                Mint, trade, and collect unique digital assets with lightning speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              {!connected ? (
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Connect your wallet to start exploring</p>
                  <div className="wallet-adapter-button-wrapper">
                    <button className="btn-primary text-lg px-8 py-4">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/explore" className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                  <span>Explore NFTs</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-card text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-neon-purple" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured NFTs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured</span> NFTs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the latest and most popular NFTs from our community
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredNFTs.map((nft, index) => (
              <NFTCard key={nft.id} nft={nft} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/explore" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2 mx-auto w-fit">
              <span>View All NFTs</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Solana</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of digital art with lightning-fast transactions and minimal fees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lightning Fast',
                description: 'Transactions complete in under 400ms with 50,000+ TPS',
                icon: Zap,
                color: 'neon-purple',
              },
              {
                title: 'Ultra Low Fees',
                description: 'Pay less than $0.01 per transaction, not $50+',
                icon: TrendingUp,
                color: 'neon-teal',
              },
              {
                title: 'Carbon Neutral',
                description: 'Solana is carbon neutral and environmentally friendly',
                icon: Sparkles,
                color: 'neon-green',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card text-center hover:neon-glow transition-all duration-500"
              >
                <div className={`flex justify-center mb-6 text-${feature.color}`}>
                  <feature.icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 