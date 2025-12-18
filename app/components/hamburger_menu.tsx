"use client";

type HamburgerMenuProps = {
  isOpen: boolean;
  onToggleAction: () => void;
};

export default function HamburgerMenu({ isOpen, onToggleAction }: HamburgerMenuProps) {

  return (
    <button
      className="flex w-8 h-8 cursor-pointer"
      onClick={onToggleAction}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        id="splitCrossBurger"
        viewBox="0 0 200 200"
        className={`burger-svg ${isOpen ? "open" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="var(--red)" strokeWidth="25" strokeLinecap="butt">
          <line id="topLine" x1="0" y1="50" x2="200" y2="50" />
          <line id="middleLine" x1="0" y1="100" x2="200" y2="100" />
          <line id="bottomLine" x1="0" y1="150" x2="200" y2="150" />
        </g>
      </svg>
    </button>
  )
}
