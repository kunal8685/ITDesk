import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const Home = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const stats = [
    { icon: Users, label: 'Active Students', value: '500+' },
    { icon: BookOpen, label: 'Courses Offered', value: '50+' },
    { icon: Award, label: 'Placement Assistance', value: '100%' },
    { icon: TrendingUp, label: 'Certified Trainers', value: '10+' }
  ];

  const features = [
    'ISO 9001:2015 Certified',
    'Hands-on Project Training',
    '100% Placement Assistance',
    'Expert Faculty',
    'Modern Lab Facilities',
    'Flexible Batch Timings'
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      course: 'AutoCAD Civil',
      company: 'L&T Construction',
      rating: 5,
      text: 'Excellent training quality! Got placed in L&T within 2 months of course completion.'
    },
    {
      name: 'Priya Patel',
      course: 'Revit Architecture',
      company: 'Godrej Properties',
      rating: 5,
      text: 'The practical approach and industry exposure helped me secure a great job.'
    },
    {
      name: 'Amit Kumar',
      course: 'STAAD Pro',
      company: 'Tata Projects',
      rating: 5,
      text: 'Best institute in PCMC for structural engineering software training.'
    }
  ];

  const softwareLogos = [
    'AutoCAD', 'Revit', 'SketchUp', 'STAAD Pro', '3ds Max', 'ETABS', 'Catia', 'SolidWorks'
  ];

  return (
    <>
      <Helmet>
        <title>CADDESK PCMC - Best CAD/CAM Training Institute in Pimpri-Chinchwad, Pune</title>
        <meta name="description" content="Join CADDESK PCMC for professional CAD/CAM training in Pimpri-Chinchwad. 100% placement assistance, ISO 9001:2015 certified, expert faculty. AutoCAD, Revit, SketchUp, STAAD Pro training." />
        <meta name="keywords" content="CAD training Pune, AutoCAD classes PCMC, Revit training Pimpri-Chinchwad, STAAD Pro course, 3ds Max training, CAD institute Pune" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-pattern">
        <div className="absolute inset-0 orange-gradient-bg opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Become Industry-Ready with 
                <span className="block text-white">CAD/CAM Training</span>
                <span className="block text-2xl md:text-3xl font-medium">in PCMC</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                100% Placement Assistance | Authorized Certification | Hands-on Projects
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Link to="/courses">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Courses
                  </Link>
                </Button>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-brand-orange px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <a href="tel:+919975028008">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img  
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                  alt="CAD training classroom with students learning AutoCAD"
                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      {/* Software Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Master Industry-Leading Software</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn the most in-demand CAD/CAM software used by top companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {softwareLogos.map((software, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-blue font-bold text-sm">{software.slice(0, 2)}</span>
                </div>
                <p className="text-sm font-medium text-gray-700">{software}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Success stories from our alumni who are now working in top companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="card-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-brand-blue">{testimonial.course}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your CAD Journey?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of successful students who have transformed their careers with our expert training.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-effect border-white border-opacity-20">
                <CardHeader>
                  <CardTitle className="text-white text-center">Get Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-gray-300"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-gray-300"
                    />
                    <Input
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-gray-300"
                    />
                    <Input
                      name="course"
                      placeholder="Interested Course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-gray-300"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white bg-opacity-10 border-white border-opacity-30 text-white placeholder-gray-300"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-brand-yellow hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Submit Inquiry
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;