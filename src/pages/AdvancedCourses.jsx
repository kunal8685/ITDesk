import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import { individualCourses } from '../data/courseData'; // Import the centralized data

const AdvancedCourses = () => {
  const { category } = useParams(); // Get the category from URL parameters

  // Filter individual advanced courses based on the URL parameter
  const filteredAdvancedCourses = useMemo(() => {
    const advancedCourseCategories = ['domain-courses', 'graphic-design']; // Define your advanced categories

    if (category) {
      const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
      // Filter for advanced categories AND the specific URL category
      return individualCourses.filter(course =>
        advancedCourseCategories.includes(course.category) &&
        course.category.toLowerCase().replace(/-/g, ' ') === normalizedCategory
      );
    }
    // If no category param, show all courses that belong to advanced categories
    return individualCourses.filter(course =>
      advancedCourseCategories.includes(course.category)
    );
  }, [category]);

  // Determine page title and description dynamically
  const pageTitle = category
    ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Advanced Courses - CADDESK PCMC`
    : 'Our Advanced Courses - CADDESK PCMC | Domain, Graphic Design & More';

  const pageDescription = category
    ? `Explore specialized advanced ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} training at CADDESK PCMC. Elevate your design and engineering skills.`
    : 'Explore advanced engineering design and graphic design courses at CADDESK PCMC. Master specialized domains with our comprehensive training programs.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={category ? `${category} advanced courses, ${pageTitle}, CADDESK PCMC` : `Advanced CAD courses, Domain courses, Graphic Design courses, CADDESK PCMC advanced courses`} />
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
                ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Advanced Courses`
                : 'Explore Our Advanced Courses'}
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              {category
                ? `Detailed information and course offerings for advanced ${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}.`
                : 'Dive deeper into specialized engineering and design fields with our advanced course offerings.'}
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/contact">
                Contact Admissions
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Individual Advanced Courses Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredAdvancedCourses.length > 0 ? (
              filteredAdvancedCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="card-hover h-full overflow-hidden flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        alt={course.name}
                        src={course.image}
                      />
                    </div>

                    <CardContent className="flex-grow flex flex-col p-6">
                      {/* Course Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {course.name}
                      </h3>
                      {/* Course Description */}
                      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
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
                <p className="text-2xl font-semibold">No advanced courses found for this category.</p>
                <Link to="/advanced-courses" className="text-brand-orange hover:underline mt-4 block">View all advanced courses</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvancedCourses;