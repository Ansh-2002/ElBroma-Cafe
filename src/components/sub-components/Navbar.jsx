import React, { useState, useEffect, useRef } from "react";
import { bakery, food, beverages,onWheels } from "../../menu-data";
import{openDays, openTime, phone1, phone2} from "../constants"
import "../../css/search.css";

const Navbar = () => {
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
  const [isTopbarScrolled, setTopbarScrolled] = useState(false);
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const inputRef = useRef(null);

  // Create an array that includes category and subCategory fields
  const allData = [].concat(
    ...bakery.map((item) =>
      item.data.map((subItem) => ({
        ...subItem,
        category: "bakery",
        subCategory: item.name,
      }))
    ),
    ...food.map((item) =>
      item.data.map((subItem) => ({
        ...subItem,
        category: "food",
        subCategory: item.name,
      }))
    ),
    ...onWheels.map((item) =>
      item.data.map((subItem) => ({
        ...subItem,
        category: "onWheels",
        subCategory: item.name,
      }))
    ),
    ...beverages.map((item) =>
      item.data.map((subItem) => ({
        ...subItem,
        category: "beverages",
        subCategory: item.name,
      }))
    )
  );
  // console.log(allData);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderScrolled(true);
        setTopbarScrolled(true);
      } else {
        setHeaderScrolled(false);
        setTopbarScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  const handleSearchActive = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchItem(searchValue);

    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <>
      <section
        id="topbar"
        className={`d-flex align-items-center fixed-top  ${
          isTopbarScrolled ? "topbar-scrolled" : ""
        }`}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          {/* Topbar content */}
          <i className="bi bi-phone d-flex align-items-center me-3"
          ><span>{phone1}</span></i>
        
          <i className="bi bi-phone d-flex align-items-center "
          ><span>{phone2}</span></i>
        <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"
          ><span>{openDays}  {openTime}</span></i>
        </div>
      </section>

      <header
        id="header"
        className={`fixed-top d-flex align-items-center  ${
          isHeaderScrolled ? "header-scrolled" : ""
        }`}
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1 className="alex-font pt-4 mb-0">
              <a href="/">
                <b>El Broma</b>
              </a>
            </h1>
            <i>
              <p className="arimo-font"
              >A little bliss in every bite</p>
              </i>
          </div>

          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMobileNavVisible ? "navbar-mobile" : ""
            }`}
          >
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search"
                className={` ${isSearchActive ? "active" : ""}`}
                ref={inputRef}
                value={searchItem}
                onChange={(e) => handleSearchChange(e)}
              />
              <div className="icon">
                <i
                  className={`bi bi-search ${isSearchActive ? "active" : ""}`}
                  onClick={handleSearchActive}
                ></i>
              </div>

              <div className="result-list">
              {filteredItems.map((item) => {
                return(
                  searchItem &&
                  <div key={item.uuid}>
                    {/* <a href={`/menu?category=${item.category}&subcategory=${item.subCategory}&name=${item.name}`} > */}
                    <a href={`/menu?category=${item.category}&subcategory=${item.subCategory}&name=${item.name}`} >
                       {item.name}
                    </a>
                    </div>
                  )
              })}

              </div>
            </div>

            <ul onClick={isMobileNavVisible ? toggleMobileNav : undefined}>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
              <li>
                <a className="nav-link scrollto" href="/menu">
                  Menu
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#about-us">
                  {/* Gallery */}
                  About Us
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i
              className={`bi bi-list mobile-nav-toggle ${
                isMobileNavVisible ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMobileNav}
            ></i>
          </nav>
        </div>
      </header>

      {/* Display filtered items
      <div className="filtered-items">
        {filteredItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div> */}
    </>
  );
};

export default Navbar;
