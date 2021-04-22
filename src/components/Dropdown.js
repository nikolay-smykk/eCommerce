import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <div className={isOpen ? 'dropdown' : 'hidden'} onClick={() => toggle()}>
      <Link to="/" className="p-4">
        Home
      </Link>

      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/" className="p-4">
        Catalog
      </Link>
      <Link to="/" className="p-4">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
