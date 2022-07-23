import { useState } from "react";

import Login from "./Login";
import MenuToggle from "./MenuToggle";
import Nav from "./Nav";

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  // const [width, setWidth] = useState(window.innerWidth);

  // function updateDimensions () {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", updateDimensions);
  //   if (width >= 960) {
  //     setOpenMenu(false);
  //   }
  //   console.log(openMenu)
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, [openMenu]);


  return (
    <div className="menu fs-menu">
      <MenuToggle openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="menu__overlay">
        <menu className="menu__inner">
          <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <Login />
        </menu>
      </div>
    </div>
  );
}

export default Menu;
