import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { individualCourses } from '../data/courseData'; // Import the centralized data

const Courses = () => {
  const { category } = useParams(); // Get the category from URL parameters

  // Filter individual courses based on the URL parameter
  const filteredCourses = useMemo(() => {
    // Define the categories for the "Courses" section
    const basicCourseCategories = ['mechanical', 'electrical', 'civil'];

    if (category) {
      // Normalize category from URL (e.g., 'mechanical' or 'domain-courses')
      const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
      return individualCourses.filter(course =>
        basicCourseCategories.includes(course.category) && // Ensure it's a basic course category
        course.category.toLowerCase().replace(/-/g, ' ') === normalizedCategory
      );
    }
    // If no category param, show all basic courses
    return individualCourses.filter(course =>
      basicCourseCategories.includes(course.category)
    );
  }, [category]);

  // Determine page title and description dynamically
  const pageTitle = category
    ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Courses - CADDESK PCMC`
    : 'Our Courses - CADDESK PCMC | Mechanical, Civil, Electrical & More';

  const pageDescription = category
    ? `Explore specialized ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} courses at CADDESK PCMC. Gain expert knowledge and practical skills.`
    : 'Explore a wide range of foundational engineering design courses at CADDESK PCMC including Mechanical, Civil, and Electrical. Get job-ready skills with expert guidance.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={category ? `${category} courses, ${pageTitle}, CADDESK PCMC` : `Mechanical CAD courses, Civil CAD courses, Electrical CAD courses, CADDESK PCMC courses`} />
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
              {category
                ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Courses`
                : 'Explore Our Engineering Design Courses'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {category
                ? `Detailed information and course offerings for ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}.`
                : 'Dive into foundational CAD courses for Mechanical, Electrical, and Civil engineering disciplines.'}
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">
                Contact Admissions
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Individual Courses Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted to 4 columns */}
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  // Removed 'delay: index * 0.1' for quicker simultaneous appearance
                  transition={{ duration: 0.6 }} 
                >
                  <Card className="card-hover h-full overflow-hidden flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        alt={course.name}
                        src={course.image}
                        loading="lazy" // Added lazy loading for images
                      />
                    </div>

                    <CardContent className="flex-grow flex flex-col p-6">
                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {course.name}
                      </h3>
                      {/* Course Description */}
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3"> {/* Use line-clamp for consistent height */}
                        {course.description}
                      </p>
                      {/* Read More Button */}
                      <Button asChild variant="link" className="text-brand-orange hover:text-brand-orange-dark p-0 h-auto self-start mt-auto">
                        <Link to={`/course-details/${course.slug}`} className="flex items-center">
                          Read More <span className="ml-2 text-xl">&rarr;</span>
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-600">
                <p className="text-2xl font-semibold">No courses found for this category.</p>
                <Link to="/courses" className="text-brand-orange hover:underline mt-4 block">View all courses</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
