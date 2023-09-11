import React, { useState,useEffect,useRef } from "react";

const InnerNavbar = () => { 
  
    const [isHeaderScrolled, setHeaderScrolled] = useState(false);
    const [isTopbarScrolled, setTopbarScrolled] = useState(false);
    const [isMobileNavVisible, setMobileNavVisible] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const inputRef = useRef(null);
  
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
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
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
  
    return (
      <>
        {/* <section id="topbar" className={`d-flex align-items-center fixed-top  ${isTopbarScrolled ? 'topbar-scrolled' : '' }`}>
            <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+91 1234 56789</span>
          </i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
            <span>Mon-Sat: 11:00 AM - 23:00 PM</span>
          </i>
        </div>
      </section> */}

  <header id="header" className={`fixed-top d-flex align-items-center ${isHeaderScrolled ? 'header-scrolled' : ''}`} style={{top:0}} >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <div className="logo me-auto">
                <h1 className="alex-font"><a href="/"><b>El Broma</b></a></h1>
                </div>

                <nav
                    id="navbar"
                    className={`navbar order-last order-lg-0 ${isMobileNavVisible ? "navbar-mobile" : ""}`}
                >   
                      <div className="searchbar">
                        <input 
                            type="text" 
                            placeholder="search"
                            className={` ${isSearchActive ? "active" : ""}`}
                            ref={inputRef} 
                            />
                        <div className="icon">
                            <i className={`bi bi-search ${isSearchActive ? "active" : ""}`} onClick= {handleSearchActive}></i>
                        </div>
                    </div>

                    <ul >
                    <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                    {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
                    <li><a className="nav-link scrollto" href="/menu">Menu</a></li>

                    <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                        <i
                            className={`bi bi-list mobile-nav-toggle ${isMobileNavVisible ? "bi-x" : "bi-list"}`}
                            onClick={toggleMobileNav}
                        ></i>
                    {/* <div className="book-a-table-btn scrollto">
                        <i class="bi bi-search"></i>
                        ...
                        < input 
                        style={{width: "200px", height: "30px", borderRadius: "10px", border: "1px solid #ccc", padding: "5px"}}
                        />
                    </div> */}
                  
                    

                    </nav>
                </div>
            </header>
    </>
    )
}
export default InnerNavbar;