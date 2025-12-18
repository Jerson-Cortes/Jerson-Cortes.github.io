'use client';
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

import HamburgerMenu from "./hamburger_menu";
import Sidebar from './sidebar';

export default function NavBar() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('Hero');
    if (!sentinel) return;

    const obs = new IntersectionObserver(
      ([e]) => setVisible(!e.isIntersecting),
      { root: null, threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header>
      <div className={`flex fixed top-0 inset-x-0 z-50 px-5 h-16 bg-white justify-center items-center ${visible ? styles.visible : styles.hidden}`}>
        <p className="text-2xl amulya-bolditalic text-(--red) pl-2.5">J.</p>
        <div className="flex ml-auto text-lg justify-center items-center">
          <div className="mr-5">
            <a className="bg-(--red) amulya-bolditalic text-white text-lg text-center py-0.5 px-3" href="#Contact">REACH OUT</a>
          </div>
          <HamburgerMenu isOpen={isMenuOpen} onToggleAction={toggleMenu} />
        </div>
      </div>
      <Sidebar isOpen={isMenuOpen} onToggleAction={toggleMenu} />
    </header>
  )
}
