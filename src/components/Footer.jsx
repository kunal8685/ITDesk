import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/">
                <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/cc7a71d1-887b-4774-ab1b-e0e4d9264061/0663768df5b75b2ed01ee616dd1c8be1.png" alt="CADDESK PCMC Logo" className="h-16 bg-white p-2 rounded-md" />
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              ISO 9001:2015 certified training center providing hands-on, job-ready training in PCMC, Pune.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-orange"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-orange"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-orange"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-300 hover:text-brand-orange"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/placements" className="text-gray-300 hover:text-white transition-colors">Placements</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Popular Courses</span>
            <ul className="space-y-2">
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Mechanical CAD</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Civil CAD</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Electrical CAD</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Industrial Domain</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">IT & Digital Marketing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Locations: Nigdi and Ravet, PCMC, Pune
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span className="text-gray-300">+91 99750 28008</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange" />
                <span className="text-gray-300">+91 73851 85100</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-orange" />
                <span className="text-gray-300">info@caddeskpcmc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 CADDESK PCMC (Pimpri Chinchwad). All rights reserved. | Guided by: Mr. Chinmay Bande
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;