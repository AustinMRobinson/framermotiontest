import React from "react"
import Layout from "./layout"

import { motion } from "framer-motion"

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 0.3,
          ease: easing
      }
    }
};

const fadeInSide = {
    initial: {
      x: -200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing
        }
    }
};

const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

const CardPage = () => {
    return (
        <Layout>
            <motion.div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-20 sm:gap-4 py-24">
                <motion.img variants={fadeInSide} src="" alt="" className="rounded bg-gray-400"></motion.img>
                <motion.div variants={stagger} transition={{ delay: 0.5 }} className="py-20">
                    <motion.h1 variants={fadeInUp} className="text-5xl">Hey there card name!</motion.h1>
                    <motion.p variants={fadeInUp} className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </motion.p>
                </motion.div>
            </motion.div>
        </Layout>
    )
}

export default CardPage