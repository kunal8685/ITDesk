import React from 'react';
import { motion } from 'framer-motion';

const PlacementsHero = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Placement Success Stories
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Join our successful alumni working in top companies across India. We provide 100% placement assistance to help you achieve your career goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">95% Success Rate</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">1800+ Placed</span>
            </div>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full">
              <span className="font-semibold">150+ Companies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsHero;