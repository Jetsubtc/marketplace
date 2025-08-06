import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Grid, List, Zap, TrendingUp, Clock } from 'lucide-react';
import NFTCard from '../components/NFTCard';

const Explore: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock NFTs data
  const allNFTs = [
    {
      id: '1',
      name: 'Cosmic Dreamer #001',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
      price: '2.5 SOL',
      creator: '0x1234...5678',
      likes: 234,
      category: 'art',
    },
    {
      id: '2',
      name: 'Neon City #042',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
      price: '1.8 SOL',
      creator: '0x8765...4321',
      likes: 189,
      category: 'photography',
    },
    {
      id: '3',
      name: 'Digital Artifact #789',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      price: '3.2 SOL',
      creator: '0x9876...5432',
      likes: 456,
      category: 'art',
    },
    {
      id: '4',
      name: 'Quantum Pixel #156',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      price: '0.9 SOL',
      creator: '0x5432...8765',
      likes: 123,
      category: 'gaming',
    },
    {
      id: '5',
      name: 'Cyberpunk Warrior',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
      price: '4.1 SOL',
      creator: '0x1111...2222',
      likes: 567,
      category: 'art',
    },
    {
      id: '6',
      name: 'Abstract Harmony',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
      price: '1.2 SOL',
      creator: '0x3333...4444',
      likes: 89,
      category: 'photography',
    },
    {
      id: '7',
      name: 'Metaverse Avatar',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      price: '2.8 SOL',
      creator: '0x5555...6666',
      likes: 234,
      category: 'gaming',
    },
    {
      id: '8',
      name: 'Digital Landscape',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      price: '1.5 SOL',
      creator: '0x7777...8888',
      likes: 156,
      category: 'art',
    },
  ];

  const filters = [
    { id: 'all', label: 'All NFTs', icon: Grid },
    { id: 'art', label: 'Art', icon: TrendingUp },
    { id: 'photography', label: 'Photography', icon: Clock },
    { id: 'gaming', label: 'Gaming', icon: Zap },
  ];

  const filteredNFTs = allNFTs.filter(nft => {
    const matchesSearch = nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || nft.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Explore</span> NFTs
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover unique digital art and collectibles on the Solana blockchain
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search NFTs, creators..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-solana-gray border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                    : 'bg-solana-gray text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list'
                    ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                    : 'bg-solana-gray text-gray-400 hover:text-white'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                    : 'bg-solana-gray text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                <filter.icon className="h-4 w-4" />
                <span className="font-medium">{filter.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-400">
            Showing {filteredNFTs.length} of {allNFTs.length} NFTs
          </p>
        </motion.div>

        {/* NFTs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}
        >
          {filteredNFTs.map((nft, index) => (
            <NFTCard key={nft.id} nft={nft} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredNFTs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="mb-6">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No NFTs Found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedFilter('all');
              }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredNFTs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <button className="btn-secondary text-lg px-8 py-4">
              Load More NFTs
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Explore; 