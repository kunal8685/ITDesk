// src/pages/CourseDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // For loading spinner
import { Button } from '@/components/ui/button';
import { useModal } from '../context/ModalContext'; // Assuming you still want an inquiry modal here
import InquiryFormModal from '@/components/InquiryFormModal'; // Assuming you still want an inquiry modal here

import { individualCourses } from '../data/courseData'; // Import your course data

const CourseDetailPage = () => {
  const { slug } = useParams(); // Get the course slug from the URL
  const navigate = useNavigate();
  const { openInquiryModal, closeInquiryModal, isModalOpen, selectedCourseName } = useModal();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // In a real application, you might fetch this from an API
    // For now, we find it from our local data array
    const foundCourse = individualCourses.find(c => c.slug === slug);

    if (foundCourse) {
      setCourse(foundCourse);
      setLoading(false);
    } else {
      // If course not found, redirect to a 404 page or courses list
      console.warn(`Course with slug "${slug}" not found. Redirecting to /courses.`);
      navigate('/courses', { replace: true }); // Redirect to all courses if not found
      setLoading(false); // Set loading to false even if not found
    }
  }, [slug, navigate]); // Re-run effect if slug or navigate changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <Loader2 className="h-10 w-10 animate-spin text-brand-blue" />
        <p className="ml-3 text-lg text-gray-700">Loading course details...</p>
      </div>
    );
  }

  // If course is null after loading (meaning not found and redirected)
  if (!course) {
    return null; // This return ensures nothing renders if navigation has already occurred
  }

  const handleInquireClick = () => {
    openInquiryModal(course.name);
  };

  return (
    <>
      <Helmet>
        <title>{`${course.name} - Course Details | CADDESK PCMC`}</title>
        <meta name="description" content={course.description} />
        <meta name="keywords" content={`${course.name} course, ${course.category} course, CADDESK PCMC, course details`} />
      </Helmet>

      {/* Hero Section for Course Detail */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center drop-shadow-lg"
          >
            {course.name}
          </motion.h1>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {course.description}
                {/* Add more detailed description here or from data */}
              </p>

              {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">What You Will Learn:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    {course.learningOutcomes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {course.prerequisites && (
                <>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Prerequisites:</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {course.prerequisites}
                  </p>
                </>
              )}

              {/* You can add more sections like "Course Structure", "Faculty", "Career Opportunities", etc. */}
            </motion.div>
          </div>

          {/* Sidebar / Call to Action */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-brand-blue-dark text-white p-6 rounded-lg shadow-md sticky top-24" // Sticky for better UX
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Enroll?</h3>
              <p className="mb-6">
                Unlock your potential with our expert-led training in {course.name}.
                Click below to get started!
              </p>
              <Button onClick={handleInquireClick} className="w-full bg-brand-orange text-white hover:bg-brand-orange-dark text-lg py-3">
                Inquire About This Course
              </Button>
              <p className="mt-4 text-center text-sm">
                Or call us at: +91 99750 28008
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <InquiryFormModal
        isOpen={isModalOpen}
        onClose={closeInquiryModal}
        initialCourseName={selectedCourseName}
      />
    </>
  );
};

export default CourseDetailPage;