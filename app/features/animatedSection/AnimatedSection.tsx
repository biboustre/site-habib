import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
};

 function AnimatedSection ({ children, className, style }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px 0px" }}
      variants={sectionVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;