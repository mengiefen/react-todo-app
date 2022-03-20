import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(true);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose
            style={{
              color: '#770000',
              fontSize: '2.5rem',
            }}
          />
        ) : (
          <FiMenu
            style={{
              color: '#770000',
              fontSize: '2.5rem',
            }}
          />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={(path) => {
                if (path.isActive) return 'active-link';
                return '';
              }}
              onClick={() => closeMenu()}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
