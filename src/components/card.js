import React from 'react';
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
};

  
const Card = ({ to }) => {
  return (
      <Link to={to}>
          <motion.div
            className="rounded-lg bg-white overflow-hidden cursor-pointer"
            variants={fadeInUp}
            whileHover={{
                scale: 1.025,
                boxShadow: "0 1rem 1.25rem 0 rgba(0,0,0,0.05)"
            }}
            whileTap={{ scale: 0.95, boxShadow: "none" }}>
                <img src="" alt="" className="h-40 bg-gray-300"></img>
                <div className="content px-8 py-6">
                    <h1 className="text-3xl text-black">Card Title</h1>
                    <span className="text-gray-500">Subtitle</span>
                </div>
            </motion.div>
      </Link>
  )
}

export default Card