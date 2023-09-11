import React, { useState,useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../css/app.css";
import { bakery, food, beverages } from "../../menu-data";
import MySVGComponent from "./MySVGComponent";

const Menutop = () => {
  const [selectedTab, setSelectedTab] = useState("bakery");
  const [filteredItems, setFilteredItems] = useState(bakery);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    const cat = params.get("category");
    console.log(cat); 
    if(cat === "bakery"){
      setSelectedTab("bakery");
      setFilteredItems(bakery);
    }

    if(cat === "beverages"){
      setSelectedTab("beverages");
      setFilteredItems(beverages);
    }
    
    if(cat === "food"){
      setSelectedTab("food");
      setFilteredItems(food);
    }

  },[]);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);

    switch (tabId) {
      case "bakery":
        setFilteredItems(bakery);
        break;
      case "beverages":
        setFilteredItems(beverages);
        break;
      case "food":
        setFilteredItems(food);
        break;
      default:
        setFilteredItems([]);
    }
  };

  return (
    <>
      <section id="main-menu" className="menu-cart scroll-reveal" style={{ paddingBottom: 0 }}>
        <div className="container">
          <h1 className="text-center mt-3 merri-font">
            <span style={{ color: "#ffb03b" }}>Menu </span> Cart
          </h1>
          <div className="divider"><MySVGComponent /></div>
        </div>
      </section>

      <section id="menu" className="menu" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li
                  className={selectedTab === "bakery" ? "filter-active" : ""}
                  onClick={() => handleTabClick("bakery")}
                >
                  Bakery
                </li>
                <li
                  className={selectedTab === "beverages" ? "filter-active" : ""}
                  onClick={() => handleTabClick("beverages")}
                >
                  Beverages
                </li>
                <li
                  className={selectedTab === "food" ? "filter-active" : ""}
                  onClick={() => handleTabClick("food")}
                >
                  Food
                </li>
              </ul>
            </div>
          </div>

          <div className="row menu-container">
            <div className="accordion" id="myAccordion">
              <TransitionGroup>
                {filteredItems.map((category, index) => (
                  <CSSTransition
                    key={category.uuid}
                    classNames="menu-item"
                    timeout={200}
                  >
                    <div className={`  filter-${selectedTab}`} key={category.uuid}>
                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id={`panelsStayOpen-heading-${category.uuid}`}
                        >
                          <button
                            className={`accordion-button ${
                              index === -1 ? "show" : "collapsed"
                            }`}
                            type="button"
                            style={{ fontFamily: "Merriweather, serif" }}
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${index}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse-${index}`}
                          >
                            {category.name}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${index}`}
                          className={`accordion-collapse collapse ${
                            index === -1 ? "show" : "collapsed"
                          }`}
                          aria-labelledby={`panelsStayOpen-heading-${category.uuid}`}
                          data-bs-parent="#myAccordion"
                        >
                          <div className="accordion-body" style={{padding: "0px 10px 25px 10px"}} > {/* style={{padding: "0 10px"}} */}
                            {category.data && category.data.map((item, index) => (
                              <div className="menu-item" key={item.uuid}>
                                <img className="menu-img" src={item.image} alt="" />
                                <div className="menu-content">
                                  <a href="#">{item.name}</a>
                                  <span>₹{item.price}</span>
                                </div>
                                <div className="menu-ingredients">{item.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menutop;
