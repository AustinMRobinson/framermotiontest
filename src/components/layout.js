import React from "react"
import { Link } from "react-router-dom";

import { motion } from "framer-motion"


const Layout = ({ children }) => {
    return (
        <div className="h-screen w-screen bg-gray-100">
            <header>
                <div className="container mx-auto">
                    <nav className="flex align-center justify-between py-8 border-solid border-b-2 border-gray-200">
                    <Link to="/"><motion.img whileTap={{ scale: 0.9 }} src="" alt="" className="w-12 h-12 rounded-full bg-gray-300"></motion.img></Link>
                    </nav>
                </div>
            </header>
            <motion.div
            className="container mx-auto"
            exit={{ opacity: 0 }}
            initial="initial"
            animate="animate">
                    {children}
            </motion.div>
      </div>
    )
}

export default Layout