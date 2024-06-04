import menuOpen from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-close-menu.svg";

function MenuToggle({ openMenu, setOpenMenu }) {
  const menuBtn = openMenu ? menuClose : menuOpen
  
  const handleMenu = () => setOpenMenu(!openMenu);

  return (
    <button
      aria-pressed={openMenu}
      onClick={handleMenu}
      className="menu__icon cursor-pointer"
    >
      <img src={menuBtn} alt="open menu" className="menu__icon-btn" />
      <span className="visually-hidden">Click for menu</span>
    </button>
  );
}

export default MenuToggle;
