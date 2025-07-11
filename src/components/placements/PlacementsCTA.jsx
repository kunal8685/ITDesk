import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PlacementsCTA = () => {
  const { toast } = useToast();

  return (
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your CAD Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our successful alumni and take the first step towards a rewarding career in CAD/CAM industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              onClick={() => toast({
                title: "Career Counseling Booked!",
                description: "Our placement counselor will contact you to discuss career opportunities.",
              })}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Book Career Counseling
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              onClick={() => toast({
                title: "Placement Brochure Requested!",
                description: "We'll send you detailed placement statistics and success stories.",
              })}
            >
              <Target className="w-5 h-5 mr-2" />
              Download Placement Report
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsCTA;