import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    if (isClick) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };
  return (
    <>
      <nav>
        <div className={styles.logo}><h2>BidZone</h2></div>
        <div  >
          <ul className= {isClick ?  styles.menu_list_active  :  styles.menu_list  }>
            <li className={styles.active}>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/auction">Auction</Link>
            </li>
            <li>
              <Link to="/about">About Us </Link>
            </li>
            <li>
              <Link to="/login">Login </Link>
            </li>
          </ul>
        </div>
        <div className={styles.humberger}>
          <i
            className={!isClick ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
            onClick={handleClick}
          ></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
