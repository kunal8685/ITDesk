import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PlacementSupport = () => {
  const { toast } = useToast();

  const handlePlacementAssistance = () => {
    toast({
      title: "Placement Assistance Request Received!",
      description: "Our placement team will contact you within 24 hours to discuss opportunities.",
    });
  };

  const supportFeatures = [
    'Dedicated Placement Officer for each student',
    'Regular industry interaction sessions',
    'Soft skills and communication training',
    'Technical interview preparation',
    'Portfolio development guidance',
    'Salary negotiation support',
    'Post-placement career guidance',
    'Alumni network support'
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              100% Placement Assistance Guarantee
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are committed to your career success. Our dedicated placement cell works tirelessly 
              to connect you with the right opportunities that match your skills and career aspirations.
            </p>
            
            <div className="space-y-4">
              {supportFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="btn-primary text-white mt-8"
              onClick={handlePlacementAssistance}
            >
              Get Placement Assistance
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img  
              className="rounded-lg shadow-lg w-full h-96 object-cover"
              alt="CADDESK PCMC placement assistance session with students and HR representatives"
             src="https://images.unsplash.com/photo-1683028222087-8c948e6d9496" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;