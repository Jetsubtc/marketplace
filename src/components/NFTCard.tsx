import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Zap } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  image: string;
  price: string;
  creator: string;
  likes: number;
}

interface NFTCardProps {
  nft: NFT;
  index: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="nft-card group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 text-white hover:text-neon-purple transition-colors">
                <Heart className="h-5 w-5" />
                <span className="text-sm font-medium">{nft.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-white hover:text-neon-teal transition-colors">
                <Eye className="h-5 w-5" />
                <span className="text-sm font-medium">View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Solana Badge */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
            <Zap className="h-3 w-3 text-neon-purple" />
            <span className="text-xs font-medium text-white">SOL</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-purple transition-colors">
            {nft.name}
          </h3>
          <p className="text-sm text-gray-400">
            by {nft.creator}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-1">Current Price</p>
            <p className="text-xl font-bold gradient-text">{nft.price}</p>
          </div>
          
          <button className="btn-primary text-sm px-4 py-2">
            Buy Now
          </button>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-purple/20 via-neon-teal/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
    </motion.div>
  );
};

export default NFTCard; 