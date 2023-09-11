import '../../css/menu.css';

const menu = () => {
    return (
        <>
             <section id="menu" className="menu" style={{paddingBottom: 0}}>
      <div className="container">

        <div className="section-title">
          <h2>Check our tasty <span>Menu</span></h2>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li data-filter="*" className="filter-active">Show All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div> */}

        {/* <div className="row menu-container">

          <div className="col-lg-6 menu-item filter-starters">
            <img className="menu-img" src="/assets/img/menu/spinach-salad.jpg" alt=""/>
            <div className="menu-content">
              <a href="#">Lobster Bisque</a><span>$5.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
            <img className="menu-img" src="/assets/img/menu/bread-barrel.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Bread barrel</a><span>$6.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
          <img className="menu-img" src="/assets/img/menu/lobster-bisque.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Crab Cake</a><span>$7.95</span>
            </div>
            <div className="menu-ingredients">
              A delicate crab cake served on a toasted roll with lettuce and tartar sauce
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
          <img className="menu-img" src="/assets/img/menu/cake.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Caesar Selections</a><span>$8.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
          <img className="menu-img" src="/assets/img/menu/mozzarella.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Tuscan Grilled</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Grilled chicken with provolone, artichoke hearts, and roasted red pesto
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-starters">
          <img className="menu-img" src="/assets/img/menu/bread-barrel.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Mozzarella Stick</a><span>$4.95</span>
            </div>
            <div className="menu-ingredients">
              Lorem, deren, trataro, filede, nerada
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
          <img className="menu-img" src="/assets/img/menu/bread-barrel.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Greek Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach, crisp romaine, tomatoes, and Greek olives
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-salads">
          <img className="menu-img" src="/assets/img/menu/bread-barrel.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Spinach Salad</a><span>$9.95</span>
            </div>
            <div className="menu-ingredients">
              Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
            </div>
          </div>

          <div className="col-lg-6 menu-item filter-specialty">
          <img className="menu-img" src="/assets/img/menu/bread-barrel.jpg" alt=''/>
            <div className="menu-content">
              <a href="#">Lobster Roll</a><span>$12.95</span>
            </div>
            <div className="menu-ingredients">
              Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
            </div>
          </div>

        </div> */}



<section className="services" style={{paddingBottom: 0}}>
<div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item">
                <a href="/menu?category=bakery">
                    <img src="assets/img/cook_dessert.png" alt="Desserts" />
                    <h4>Bakery</h4>
                </a>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item">
                <a href="/menu?category=beverages">
                    <img src="assets/img/drinks.png" alt="Breakfast" />
                    <h4>Beverages</h4>
                </a>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item">
                <a href="/menu?category=food">
                    <img src="assets/img/cook_dinner.png" alt="Dinner" />
                    <h4>Food</h4>
                </a>
            </div>
        </div>
        
    
    </div>
</div>

        </section>

      </div>
      </section>
        </>
    );
    }
    export default menu;