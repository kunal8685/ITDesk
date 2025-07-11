import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const FaqSection = () => {
  const faqs = [
    {
      question: 'What are the course timings?',
      answer: 'We offer flexible batch timings including morning (9 AM - 12 PM), afternoon (2 PM - 5 PM), evening (6 PM - 9 PM), and weekend batches.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide 100% placement assistance with a dedicated placement cell and partnerships with 150+ companies.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Course fees vary depending on the course. We also offer installment options and scholarships. Please contact us for details.'
    },
    {
      question: 'Are the certificates industry-recognized?',
      answer: 'Yes, we are an authorized training center and provide industry-recognized certificates from leading software companies.'
    },
    {
      question: 'Can I get a demo class?',
      answer: 'Absolutely! We offer free demo classes for all our courses. You can book a demo class by calling us or filling the inquiry form.'
    },
    {
      question: 'What is the duration of courses?',
      answer: 'Course duration ranges from 2-4 months depending on the complexity and depth of the course content.'
    }
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our courses and admission process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="card-hover h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;