import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MainMenu({ route }) {
  const [showDropdownIcon, setShowDropdownIcon] = useState(false);

  useEffect(() => {
    if (route && route.subRoutes && route.subRoutes.length > 0) {
      const found = route.subRoutes.find((item) => item.showInMenu === true);
      if (found) {
        setShowDropdownIcon(true);
      }
    }
  }, [])

  return (
    <li className="nav-item dropdown">
      <Link
        to={route && route.path}
        className={`nav-link ${(showDropdownIcon) ? "" : ""} `}
        data-bs-toggle={(showDropdownIcon) ? "dropdown" : ""}
        data-bs-auto-close={(showDropdownIcon) ? "true" : ""}
        role={(showDropdownIcon) ? "button" : ""}
        aria-expanded={(showDropdownIcon) ? "false" : ""}
      >
        {route.icon &&
          // <span className="nav-link-icon d-md-none d-lg-inline-block">
            <route.icon />
          // </span>
          }
        <span className="nav-link-title fs-3">{route.title}</span>
      </Link>

      {/* {showDropdownIcon &&
        <div className="dropdown-menu">
          <div className="dropdown-menu-columns">
            <div className="dropdown-menu-column">
              {route.subRoutes.filter(sRoute => sRoute.showInMenu === true).map((subRoutes, i) => (
                <Link to={route.path + "/" + subRoutes.path} className="dropdown-item" key={i}>
                  {subRoutes.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      } */}
    </li>
  );
}

export default MainMenu;
