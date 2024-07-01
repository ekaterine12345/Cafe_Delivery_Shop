import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from the diverse menu featuring a delectable array of dishes ...</p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          View Menu
        </motion.button>
      </div>
    </div>
  );
}

export default Header;
