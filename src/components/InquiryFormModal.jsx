import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const InquiryFormModal = ({ isOpen, onClose, initialCourseName = '' }) => { // Changed prop name
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    workingStatus: '',
    trainingMode: '',
    courseName: initialCourseName, // Changed field name to courseName
  });

  useEffect(() => {
    // Update formData when initialCourseName prop changes
    setFormData((prev) => ({ ...prev, courseName: initialCourseName }));
  }, [initialCourseName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Debugging line

    try {
      const response = await fetch("http://localhost:8080/api/inquiry/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Inquiry Submitted!",
          description: "Our team will contact you shortly with more details.",
          variant: "success",
        });
        setFormData({ // Reset form after successful submission
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          workingStatus: '',
          trainingMode: '',
          courseName: '', // Reset courseName
        });
        onClose(); // Close the modal
      } else {
        const errorData = await response.json();
        toast({
          title: "Submission Failed",
          description: errorData.message || "There was an error submitting your inquiry. Please try again.",
          variant: "destructive",
        });
        console.error("Form submission error:", errorData);
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not connect to the server. Please check your internet connection.",
        variant: "destructive",
      });
      console.error("Network error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Inquiry for: <span className="text-brand-orange">{formData.courseName || "A Course"}</span>
            </h2>
            <p className="text-center text-gray-600 mb-6">Please fill out the form below to book a demo.</p>


            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="workingStatus"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.workingStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Working Status</option>
                  <option value="Student">Student</option>
                  <option value="Employed">Employed</option>
                  <option value="Fresher">Fresher</option>
                </select>
                <select
                  name="trainingMode"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.trainingMode}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Training Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              {/* Hidden field to capture the course name */}
              <input
                type="hidden"
                name="courseName"
                value={formData.courseName}
              />
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-brand-blue text-white py-3 px-8 rounded-md hover:bg-brand-blue-dark transition-colors duration-200 text-lg font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryFormModal;
