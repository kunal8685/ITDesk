import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Navigation,
  Facebook,
  Instagram,
  Linkedin,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact/ContactForm';
import FaqSection from '@/components/contact/FaqSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919975028008';
    const message = 'Hi! I would like to know more about CAD/CAM courses at CADDESK PCMC.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectionsClick = (location) => {
    let address;
    if (location === 'Nigdi') {
      address = 'CADDESK PCMC, Nigdi, Pune';
    } else {
      address = 'CADDESK PCMC, Ravet, Pune';
    }
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' },
    { icon: Globe, name: 'Website', url: '#', color: 'text-gray-600' }
  ];

  return (
    <>
      <Helmet>
        <title>Contact CADDESK PCMC - Nigdi & Ravet Branches</title>
        <meta name="description" content="Contact CADDESK PCMC for CAD/CAM course admissions. Visit our branches in Nigdi or Ravet, call +91 99750 28008, or send us a message." />
        <meta name="keywords" content="Contact CADDESK PCMC, Nigdi, Ravet, CAD training admission, AutoCAD course inquiry, Revit training contact" />
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
              Get in Touch with Us
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're here to help you start your career journey. Reach out to us with any questions or to schedule a visit to one of our branches.
            </p>
            <Button 
              size="lg" 
              className="btn-primary px-8 py-3"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Our Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Our Branches</h4>
                      <p className="text-gray-600">Nigdi, Pimpri-Chinchwad, Pune</p>
                      <p className="text-gray-600">Ravet, Pimpri-Chinchwad, Pune</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 99750 28008</p>
                      <p className="text-gray-600">+91 73851 85100</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@caddeskpcmc.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-brand-orange mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 bg-gray-100 rounded-full hover:bg-brand-orange hover:text-white transition-colors ${social.color}`}>
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Branches</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <img  className="w-full h-full object-cover" alt="Map showing location of CADDESK PCMC Nigdi branch" src="https://images.unsplash.com/photo-1566974898924-7e4f27aae5a6" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4 text-center">
                      <h3 className="text-2xl font-bold mb-2">Nigdi Branch</h3>
                      <Button className="bg-white text-gray-800 hover:bg-gray-100" onClick={() => handleDirectionsClick('Nigdi')}>
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <img  className="w-full h-full object-cover" alt="Map showing location of CADDESK PCMC Ravet branch" src="https://images.unsplash.com/photo-1563192038-790b876f1df1" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4 text-center">
                      <h3 className="text-2xl font-bold mb-2">Ravet Branch</h3>
                      <Button className="bg-white text-gray-800 hover:bg-gray-100" onClick={() => handleDirectionsClick('Ravet')}>
                        <Navigation className="w-5 h-5 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
};

export default Contact;