import { useState } from "react";

import Login from "./Login";
import MenuToggle from "./MenuToggle";
import Nav from "./Nav";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="menu fs-menu">
      <MenuToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="menu__overlay">
        <div className="menu__inner">
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Menu;
