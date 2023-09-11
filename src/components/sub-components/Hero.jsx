const hero = () => {    
    return (
        <>
          <section id="hero">
    <div className="hero-container">
      <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">
        <div className="carousel-item active" style={{backgroundImage: 'url(assets/img/slide/slide-1.jpg)'}}> 
            <div className="carousel-container">
              <div className="carousel-content">
                {/* <h2 className="animate__animated animate__fadeInDown"><span className="alex-font"><b>El Broma</b></span> Bakery & Cafe</h2> */}
                <h2 className="animate__animated animate__fadeInDown"><span> El Broma</span> Bakery & Cafe</h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <div>
                  <a href="#menu" className="btn-menu animate__animated animate__fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animate__animated animate__fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
            </div>
          </div>

  

        </div>


      </div>
    </div>
  </section>
        </>
    )};
export default hero;