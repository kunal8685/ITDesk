import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Briefcase, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PlacementStats from '@/components/placements/PlacementStats';
import PartnerCompanies from '@/components/placements/PartnerCompanies';
import SuccessStories from '@/components/placements/SuccessStories';

const Placements = () => {
  const { toast } = useToast();

  const supportFeatures = [
    'Dedicated Placement Officer for each student',
    'Regular industry interaction sessions',
    'Soft skills and communication training',
    'Technical interview preparation & Mock Interviews',
    'Portfolio development guidance',
    'Ongoing tie-ups with top companies',
    'Post-placement career guidance',
    'Alumni network support'
  ];

  return (
    <>
      <Helmet>
        <title>Placements - CADDESK PCMC | 100% Placement Assistance</title>
        <meta name="description" content="Explore placement success at CADDESK PCMC with 100% placement assistance, mock interviews, and tie-ups with top companies. Start your career with us." />
        <meta name="keywords" content="CAD jobs Pune, 100% placement assistance, Revit jobs PCMC, mock interviews, engineering jobs Pimpri-Chinchwad" />
      </Helmet>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your Career with Our Support
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We are committed to your success. Our robust placement program is designed to connect you with your dream job.
            </p>
            <div className="bg-white bg-opacity-20 px-6 py-3 rounded-full inline-block">
              <span className="font-semibold text-lg">100% Placement Assistance</span>
            </div>
          </motion.div>
        </div>
      </section>

      <PlacementStats />
      
      <SuccessStories />

      {/* Placement Support Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Comprehensive Placement Support
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From day one, our dedicated placement cell works to prepare you for the industry. We provide end-to-end support including mock interviews, resume building, and coordinating with our network of partner companies.
              </p>
              
              <div className="space-y-4">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img  
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                alt="Students participating in a mock interview session at CADDESK PCMC"
               src="https://images.unsplash.com/photo-1573496130407-57329f01f769" />
            </motion.div>
          </div>
        </div>
      </section>

      <PartnerCompanies />

      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Connect with our placement team to explore the opportunities waiting for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary px-8 py-3"
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
                className="border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3"
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
    </>
  );
};

export default Placements;