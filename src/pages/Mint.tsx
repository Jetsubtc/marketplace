import React, { useState, useRef } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { motion } from 'framer-motion';
import { Upload, Image, FileText, Zap, Sparkles, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Mint: React.FC = () => {
  const { connected, publicKey } = useWallet();
  const [isUploading, setIsUploading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    royalties: '5',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload process
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string);
          setIsUploading(false);
          toast.success('Image uploaded successfully!');
        };
        reader.readAsDataURL(file);
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMint = async () => {
    if (!connected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!uploadedImage) {
      toast.error('Please upload an image first');
      return;
    }

    if (!formData.name || !formData.description || !formData.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsMinting(true);
    
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      toast.success('NFT minted successfully on Solana!');
      // Reset form
      setUploadedImage(null);
      setFormData({
        name: '',
        description: '',
        price: '',
        royalties: '5',
      });
    }, 3000);
  };

  const isFormValid = uploadedImage && formData.name && formData.description && formData.price;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Mint</span> Your NFT
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Create and mint your unique digital art on the Solana blockchain
          </p>
        </motion.div>

        {!connected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center py-20"
          >
            <div className="mb-6">
              <AlertCircle className="h-16 w-16 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Wallet Required</h3>
              <p className="text-gray-400">
                Please connect your Solana wallet to mint NFTs
              </p>
            </div>
            <div className="wallet-adapter-button-wrapper">
              <button className="btn-primary text-lg px-8 py-4">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Upload Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Image className="h-6 w-6 text-neon-purple" />
                  <span>Upload Your Artwork</span>
                </h3>
                
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    uploadedImage
                      ? 'border-neon-purple/50 bg-neon-purple/5'
                      : 'border-white/20 hover:border-neon-purple/50 hover:bg-white/5'
                  }`}
                >
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img
                        src={uploadedImage}
                        alt="Uploaded artwork"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      <p className="text-neon-teal text-sm">Image uploaded successfully!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-white mb-2">
                          {isUploading ? 'Uploading...' : 'Click to upload'}
                        </p>
                        <p className="text-sm text-gray-400">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-purple mx-auto mb-2"></div>
                        <p className="text-white">Uploading...</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Minting Info */}
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-neon-teal" />
                  <span>Solana Benefits</span>
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-neon-green" />
                    <span>Transaction fee: ~$0.01</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-neon-green" />
                    <span>Minting time: ~400ms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-neon-green" />
                    <span>Carbon neutral blockchain</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-neon-purple" />
                  <span>NFT Details</span>
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      NFT Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter NFT name"
                      className="w-full px-4 py-3 bg-solana-gray border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your NFT..."
                      rows={4}
                      className="w-full px-4 py-3 bg-solana-gray border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Price (SOL) *
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="0.0"
                        step="0.1"
                        min="0"
                        className="w-full px-4 py-3 bg-solana-gray border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Royalties (%)
                      </label>
                      <input
                        type="number"
                        name="royalties"
                        value={formData.royalties}
                        onChange={handleInputChange}
                        placeholder="5"
                        min="0"
                        max="50"
                        className="w-full px-4 py-3 bg-solana-gray border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple/50 focus:ring-2 focus:ring-neon-purple/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mint Button */}
              <button
                onClick={handleMint}
                disabled={!isFormValid || isMinting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all ${
                  isFormValid && !isMinting
                    ? 'btn-primary'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isMinting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Minting on Solana...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Mint NFT</span>
                  </div>
                )}
              </button>

              {/* Wallet Info */}
              {publicKey && (
                <div className="glass-card text-center">
                  <p className="text-sm text-gray-400 mb-2">Connected Wallet</p>
                  <p className="text-neon-teal font-mono text-sm">
                    {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint; 