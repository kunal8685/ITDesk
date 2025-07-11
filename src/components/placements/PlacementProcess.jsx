import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PlacementProcess = () => {
  const placementProcess = [
    {
      step: '1',
      title: 'Skill Assessment',
      description: 'Comprehensive evaluation of technical skills and project portfolio'
    },
    {
      step: '2',
      title: 'Resume Building',
      description: 'Professional resume creation highlighting your CAD expertise'
    },
    {
      step: '3',
      title: 'Interview Preparation',
      description: 'Mock interviews and technical round preparation sessions'
    },
    {
      step: '4',
      title: 'Job Matching',
      description: 'Matching your skills with suitable job opportunities'
    },
    {
      step: '5',
      title: 'Interview Coordination',
      description: 'Scheduling and coordinating interviews with partner companies'
    },
    {
      step: '6',
      title: 'Offer Negotiation',
      description: 'Support in salary negotiation and offer finalization'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Placement Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure maximum placement success for our students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placementProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="card-hover h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{process.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementProcess;