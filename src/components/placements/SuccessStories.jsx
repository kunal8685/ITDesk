import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SuccessStories = () => {
  const placedStudents = [
    {
      name: 'Rahul Sharma',
      course: 'AutoCAD Civil',
      company: 'L&T Construction',
      package: '₹5.2 LPA',
      position: 'CAD Designer',
      image: 'Professional male CAD designer working at L&T Construction'
    },
    {
      name: 'Priya Patel',
      course: 'Revit Architecture',
      company: 'Godrej Properties',
      package: '₹4.8 LPA',
      position: 'BIM Coordinator',
      image: 'Female BIM coordinator working on Revit at Godrej Properties'
    },
    {
      name: 'Amit Kumar',
      course: 'STAAD Pro',
      company: 'Tata Projects',
      package: '₹6.0 LPA',
      position: 'Structural Engineer',
      image: 'Structural engineer working on STAAD Pro at Tata Projects'
    },
    {
      name: 'Sneha Gupta',
      course: 'SketchUp + V-Ray',
      company: 'Shapoorji Pallonji',
      package: '₹4.2 LPA',
      position: '3D Visualizer',
      image: 'Female 3D visualizer creating architectural renders'
    },
    {
      name: 'Vikash Singh',
      course: '3ds Max',
      company: 'Mahindra Lifespaces',
      package: '₹5.5 LPA',
      position: 'Visualization Artist',
      image: 'Male visualization artist working on 3ds Max projects'
    },
    {
      name: 'Neha Joshi',
      course: 'AutoCAD Mechanical',
      company: 'Bajaj Auto',
      package: '₹4.0 LPA',
      position: 'Design Engineer',
      image: 'Female mechanical design engineer at Bajaj Auto'
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our successful alumni who have built thriving careers in leading companies across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placedStudents.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img  
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      alt={`${student.name} - ${student.position} at ${student.company}`}
                     src="https://images.unsplash.com/photo-1635402689379-545b134e58ed" />
                    <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
                    <p className="text-blue-600 font-medium">{student.position}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Course:</span>
                      <span className="font-medium">{student.course}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Company:</span>
                      <span className="font-medium">{student.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-bold text-green-600">{student.package}</span>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;