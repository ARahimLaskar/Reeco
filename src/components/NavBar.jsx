import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 620px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    handleMediaQueryChange(mediaQuery);

    mediaQuery.addListener(handleMediaQueryChange); // Add listener for changes

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange); // Clean up the listener on unmount
    };
  }, []);
  const handleClose = () => {
    setToggleMenu(false);
  };
  const handleOpen = () => {
    setToggleMenu(true);
  };
  return (
    <div className="nav">
      <nav class="nav_container">
        <div class="menu_items">
          {toggleMenu ? (
            <span
              onClick={handleClose}
              class="material-symbols-outlined menu-open"
            >
              close
            </span>
          ) : (
            <span
              onClick={handleOpen}
              class="material-symbols-outlined menu-open"
            >
              menu
            </span>
          )}
          <img id="logo" src={logo} alt="Reeco" />
          {toggleMenu && showMenu ? (
            <ul class="navigation_box">
              <li>
                <Link href="#store">Store</Link>
              </li>
              <li>
                <Link href="#order">Orders</Link>
              </li>
              <li>
                <Link href="#food">Analytics</Link>
              </li>
            </ul>
          ) : (
            <ul id="navlinks" class="navigation_box">
              <li>
                <Link href="#store">Store</Link>
              </li>
              <li>
                <Link href="#order">Orders</Link>
              </li>
              <li>
                <Link href="#food">Analytics</Link>
              </li>
            </ul>
          )}
        </div>
        <div class="navigation_icons">
          <a href="#cart">
            <span class="material-symbols-outlined">shopping_cart</span>
          </a>
          <p id="user">Hello, User</p>
        </div>
      </nav>
    </div>
  );
};
