// src/context/ModalContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create the context
const ModalContext = createContext();

// Create a provider component
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('');

  // Function to open the modal with a specific course name
  const openInquiryModal = (courseName) => {
    setSelectedCourseName(courseName);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeInquiryModal = () => {
    setIsModalOpen(false);
    setSelectedCourseName(''); // Clear the selected course when closing
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, selectedCourseName, openInquiryModal, closeInquiryModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
