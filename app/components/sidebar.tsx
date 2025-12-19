'use client';
import { useEffect, useRef } from 'react';

type SidePanelProps = {
  isOpen: boolean;
  onToggleAction: () => void;
};

export default function Sidebar({ isOpen, onToggleAction }: SidePanelProps) {
  const savedScrollY = useRef(0);

  useEffect(() => {
    if (isOpen) {

      savedScrollY.current = window.scrollY;

      Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${savedScrollY.current}px`,
        left: '0',
        right: '0',
        width: '100%',
      });
    } else {

      const { style } = document.body;
      style.position = '';
      style.top = '';
      style.left = '';
      style.right = '';
      style.width = '';

      window.scrollTo(0, savedScrollY.current);
    }

  }, [isOpen]);

  return (
    <nav aria-label="Main site navigation" className={`fixed inset-y-0 right-0 z-20 bg-white w-full mt-16 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <ul className="flex flex-col items-end font-bold text-4xl mr-5 mt-8">
        <li className="mb-6 hover:text-(--red)"><a onClick={onToggleAction} href="#AboutMe">[ABOUT ME]</a></li>
        <li className="mb-6 hover:text-(--red)"><a onClick={onToggleAction} href="#Skills">[SKILLS]</a></li>
        <li className="mb-6 hover:text-(--red)"><a onClick={onToggleAction} href="#Contact">[CONTACT]</a></li>
      </ul>
    </nav>
  )
}
