
import React from "react";
import { motion } from "framer-motion";
import "./Day.css";

const Day = ({ title, description, image }) => {
  return (
    <motion.div 
      className="day-page"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <motion.img 
        src={image} 
        alt={title} 
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Day;
