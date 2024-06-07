import React from 'react'

function TabNavbar({
  navItem,
  handleToggle,
  active = false,
  disable = false,

}) {
  return (
    <>
      {navItem.map((item) => (
        <a
          className={`list-group-item list-group-item-action d-flex align-items-center ${active === item._id ? "active" : "" }
           ${(disable === true && item._id > 1) ? "disabled" : ""} `}
          onClick={() => handleToggle(item._id)}
        >
          {item.name}
        </a>
      ))}

    </>

  )
}

export default TabNavbar