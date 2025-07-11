import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

const PartnerCompanies = () => {
  const partnerCompanies = [
    'L&T Construction', 'Tata Projects', 'Godrej Properties', 'Shapoorji Pallonji',
    'Mahindra Lifespaces', 'Bajaj Auto', 'Thermax', 'Kirloskar',
    'Pune Metro', 'PCMC', 'Infosys', 'TCS', 'Wipro', 'Tech Mahindra',
    'Larsen & Toubro', 'Reliance Infrastructure'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Placement Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have strong partnerships with leading companies across various industries for placement opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {partnerCompanies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gray-50 p-4 rounded-lg text-center hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs font-medium text-gray-700">{company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompanies;