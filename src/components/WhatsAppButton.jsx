import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919975028008';
    const message = 'Hi! I am interested in CAD/CAM courses at CADDESK PCMC. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      className="floating-whatsapp bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      onClick={handleWhatsAppClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default WhatsAppButton;