import { useState, useEffect } from "react";

function NavButton({ title, openMenu, setOpenMenu, selected, setSelected }) {
  const [openSubNav, setOpenSubNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function updateDimensions () {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    if (width < 960) {
      if (openMenu === false) {
        setOpenSubNav(false);
        setSelected(null)
      }
    } else {
      if (openMenu && openSubNav) {
        setSelected(null)
      }
      setOpenMenu(false)
      if (selected === null || (selected !== title && openSubNav === true)) {
        setOpenSubNav(false);
      }
    }
    return () => window.removeEventListener("resize", updateDimensions);
  }, [openMenu, selected, openSubNav, width]);

  function handleSubNav () {
    setOpenSubNav(!openSubNav);
    setSelected(title);
  };

  const arrow = openSubNav ? 
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>
   : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>

  return (
    <button
      className="subnav__title bg-none cursor-pointer"
      aria-pressed={openSubNav}
      onClick={handleSubNav}
    >
      <span className="subnav__title-name nav__item-name">{title}</span>
      <span aria-hidden className="subnav__title-arrow">{arrow}</span>
    </button>
  );
}



export default NavButton;
