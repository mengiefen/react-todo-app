import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FaAngleDoubleRight, FaHome } from 'react-icons/fa';
import { BsFillQuestionSquareFill } from 'react-icons/bs';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
      icon: <FaHome style={{ fontSize: '2rem' }} />,
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
      icon: <BsFillQuestionSquareFill style={{ fontSize: '2rem' }} />,
    },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
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
              color: '#990000',
              fontSize: '2rem',
            }}
          />
        ) : (
          <FaAngleDoubleRight
            style={{
              color: '#eee',
              fontSize: '2rem',
            }}
          />
        )}
      </button>
      <ul
        style={navbarOpen ? { display: 'none' } : { display: 'block' }}
        className={`iconNav ${!navbarOpen ? 'showIcon' : ''}`}
      >
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
              {link.icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id} className={navbarOpen ? '' : 'closeMenu'}>
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
