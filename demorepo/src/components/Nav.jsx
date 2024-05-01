import { useState } from "react";
import NavButton from "./elements/NavButton";
import SubNav from "./elements/SubNav";
import navData from "../helpers/navData";


function Nav({ openMenu, setOpenMenu }) {
  const [ selected, setSelected ] = useState();

  const navList = navData.map((navLi) => {
    return (
      <li className={`nav__item ${navLi.items && "subnav"}`} key={navLi.title}>
        {navLi.items ? (
          <>
            <NavButton
              title={navLi.title}
              openMenu={openMenu}
              setSelected={setSelected}
              selected={selected}
              setOpenMenu={setOpenMenu}
            />
            <SubNav items={navLi.items} title={navLi.title} />
          </>
        ) : (
          <a href="#" className="nav__item-name">{navLi.title}</a>
        )}
      </li>
    );
  });

  return (
    <nav className="nav link">
      <ul className="nav__items">
        {navList}
      </ul>
    </nav>
  );
}

export default Nav;

