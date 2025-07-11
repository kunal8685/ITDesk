import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  MapPin,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: 'Students Trained', value: '2000+' },
    { icon: Award, label: 'Years of Experience', value: '8+' },
    { icon: BookOpen, label: 'Courses Offered', value: '50+' },
    { icon: TrendingUp, label: 'Placement Rate', value: '95%' }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: 'ISO 9001:2015 Certified',
      description: 'Assuring quality education and management systems that meet international standards.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with extensive industry experience and teaching expertise.'
    },
    {
      icon: BookOpen,
      title: 'Hands-on Training',
      description: 'Practical training approach with real-world projects and industry case studies.'
    },
    {
      icon: TrendingUp,
      title: '100% Placement Assistance',
      description: 'Dedicated placement cell with tie-ups with leading companies for job assistance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About CADDESK PCMC - ISO 9001:2015 Certified CAD Training Institute</title>
        <meta name="description" content="Learn about CADDESK PCMC, an ISO 9001:2015 certified training center in Pimpri Chinchwad (PCMC), Pune. Guided by Mr. Chinmay Bande, we provide job-ready training." />
        <meta name="keywords" content="About CADDESK PCMC, ISO 9001:2015 certified, CAD training institute Pune, Mr. Chinmay Bande, job-ready training" />
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
              About CADDESK PCMC (Pimpri Chinchwad)
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              An ISO 9001:2015 certified training center in PCMC, Pune, dedicated to shaping future professionals under the expert guidance of Mr. Chinmay Bande.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Locations: Nigdi & Ravet, PCMC, Pune</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                alt="Mr. Chinmay Bande guiding students in a modern classroom"
               src="https://images.unsplash.com/photo-1556761175-b413da4baf72" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to CADDESK PCMC</h2>
              <p className="text-lg text-gray-600 mb-6">
                CADDESK PCMC is a premier, <span className="font-semibold text-brand-blue">ISO 9001:2015 certified training center</span> based in Pimpri Chinchwad (PCMC), Pune. Under the visionary leadership of <span className="font-semibold text-brand-orange">Mr. Chinmay Bande</span>, we have established ourselves as a beacon of quality technical education.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-8 h-8 text-brand-blue" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide hands-on, job-ready training through expert instructors and real-world projects, empowering students to achieve their career goals and meet industry demands.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose CADDESK PCMC?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand out as the premier choice for CAD/CAM training in Pimpri-Chinchwad with our unique advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-brand-blue" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;