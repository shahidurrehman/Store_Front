import React from "react";
import { useLocation, Link } from "react-router-dom";
import { capitalizeFirstLetter, getFormattedString } from "../../utils/app.util";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname && pathname?.split("/").filter(Boolean);
  


  return (
    <div className="mb-1">
      <ol className="breadcrumb" aria-label="breadcrumbs">
        <li className="breadcrumb-item">
          {pathnames.length ? <Link to="/">Home</Link> : <span> Home </span>}
        </li>

        {pathnames.map((route, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          let name = getFormattedString(route);
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li className="breadcrumb-item" key={name}>
              <span>{capitalizeFirstLetter(name)}</span>
            </li>
          ) : (
            <li className="breadcrumb-item" key={name} aria-current="page">
              <Link to={routeTo}>{capitalizeFirstLetter(name)}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
