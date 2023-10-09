const hero = () => {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    {/* <h2 className="animate__animated animate__fadeInDown"><span className="alex-font"><b>El Broma</b></span> Bakery & Cafe</h2> */}
                    <h2 className="animate__animated animate__fadeInDown mb-0">
                      <span className="alex-font"> El Broma</span> Bakery & Cafe
                    </h2>
                    <p className="arimo-font mt-0">
                      <i>A little bliss in every bite</i>
                    </p>
                    <p className="animate__animated animate__fadeInUp">
                      From golden, flaky croissants to aromatic coffees to finger licking pasta to
                      thick oreo shake to rich, velvety cakes, each item is a
                      labor of love. We believe in the power of quality
                      ingredients and meticulous craftsmanship to deliver
                      flavors that linger in your memory long
                      after the last bite
                    </p>
                    {/* <div>
                  <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Cafe Menu</a>
                  <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
               
                  <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto mt-3">On Wheels Menu</a>
                  <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto mt-3">Private Dining</a>
                </div> */}

                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          {/* Display these buttons side by side on larger screens */}
                          <div className="btn-group">
                            <a
                              href="#menu"
                              className="btn btn-menu animate__animated animate__fadeInUp scrollto mt-3"
                            >
                              Our Cafe Menu
                            </a>
                          </div>
                          <div className="btn-group">
                            <a
                              href="#book-a-table"
                              className="btn btn-book animate__animated animate__fadeInUp scrollto mt-3"
                            >
                              Book a Table
                            </a>
                          </div>
                        </div>
                        <div className="col-12">
                          {/* Display these buttons stacked on small screens */}
                          <div className="btn-group">
                            <a
                              href="#menu"
                              className="btn btn-menu animate__animated animate__fadeInUp scrollto mt-3"
                            >
                              On Wheels Menu
                            </a>
                          </div>
                          <div className="btn-group">
                            <a
                              href="#private-dining"
                              className="btn btn-book animate__animated animate__fadeInUp scrollto mt-3"
                            >
                              Private Dining
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default hero;
