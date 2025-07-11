import React from 'react';
import { motion } from 'framer-motion';
import { Building, TrendingUp, Users, Award } from 'lucide-react';

const PlacementStats = () => {
  const placementStats = [
    { icon: TrendingUp, label: 'Placement Rate', value: '95%' },
    { icon: Users, label: 'Students Placed', value: '1800+' },
    { icon: Building, label: 'Partner Companies', value: '150+' },
    { icon: Award, label: 'Average Package', value: '₹4.5 LPA' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {placementStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;