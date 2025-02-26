import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

 function AnimatedSection ({ children, className }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
      variants={sectionVariants}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;