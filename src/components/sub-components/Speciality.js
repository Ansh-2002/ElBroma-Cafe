const Speciality = () => {
    return (
        <>
             <section id="specials" className="specials" 
             style={{marginBottom:"0",paddingBottom:"0"}}
             >
        <div className="container">
          <div className="section-title">
            <h2>Check our <span>Specials</span></h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                    >Broma Veg Burger</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2"
                    >Muffins</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3"
                    >Cake</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4"
                    >Broma Aglio E Olio Spaghetti</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5"
                    >Iusto ut expedita aut</a
                  >
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Bun stuffed with veg. patties and cheese, jalapenos,caramilised onions and lettuce</h3>
                      {/* <p className="fst-italic">
                      Bun stuffed with veg. patties and cheese, jalapenos,caramilised onions and lettuce
                      </p> */}
                      {/* <p>
                        Et nobis maiores eius. Voluptatibus ut enim blanditiis
                        atque harum sint. Laborum eos ipsum ipsa odit magni.
                        Incidunt hic ut molestiae aut qui. Est repellat minima
                        eveniet eius et quis magni nihil. Consequatur dolorem
                        quaerat quos qui similique accusamus nostrum rem vero
                      </p> */}
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/specials-1.jpg"
                        alt=""
                        className="img-fluid specials-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Et blanditiis nemo veritatis excepturi</h3>
                   
                     
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/specials-2.jpg"
                        alt=""
                        className="img-fluid specials-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                    
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/specials-3.jpg"
                        alt=""
                        className="img-fluid specials-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-4">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>
                        Fuga dolores inventore laboriosam ut est accusamus
                        laboriosam dolore
                      </h3>
                  
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/specials-4.jpg"
                        alt=""
                        className="img-fluid specials-img"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-5">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>
                        Est eveniet ipsam sindera pad rone matrelat sando reda
                      </h3>
                      <p className="fst-italic">
                      Bun stuffed with veg. patties and cheese, jalapenos,caramilised onions and lettuce
                      </p>
                      <p>
                        Et nobis maiores eius. Voluptatibus ut enim blanditiis
                        atque harum sint. Laborum eos ipsum ipsa odit magni.
                        Incidunt hic ut molestiae aut qui. Est repellat minima
                        eveniet eius et quis magni nihil. Consequatur dolorem
                        quaerat quos qui similique accusamus nostrum rem vero
                      </p>
                    
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="assets/img/specials-5.jpg"
                        alt=""
                        className="img-fluid specials-img"
                      />
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
}
export default Speciality;
