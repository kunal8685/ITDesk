import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import AdvancedCourses from '@/pages/AdvancedCourses';
import About from '@/pages/About';
import Placements from '@/pages/Placements';
import Contact from '@/pages/Contact';
import CourseDetailPage from '@/pages/CourseDetailPage'; // Import the new component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Basic Courses Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:category" element={<Courses />} />

            {/* Advanced Courses Routes */}
            <Route path="/advanced-courses" element={<AdvancedCourses />} />
            <Route path="/advanced-courses/:category" element={<AdvancedCourses />} />

            {/* Other Static Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />

            {/* Course Detail Page Route */}
            <Route path="/course-details/:slug" element={<CourseDetailPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
