import Album from "./Album";

const gallery = () => {
  return (
    <>
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          <div className="section-title">
            <h2>
              {" "}
              <span> About </span> Us{" "}
            </h2>
            <p>
              Welcome to El Broma, where the artistry of baking and the warmth
              of community converge to create an unforgettable culinary
              experience. Nestled in the heart of Gurugram, our establishment
              is a haven for those who cherish the simple pleasures of life:
              delectable pastries, aromatic coffee, mouth-watering food, and the
              joy of shared moments.
            </p>
            <p>
              From golden, flaky croissants to finger licking pasta to thick
              oreo shake to rich, velvety cakes, each item is a labor of love.
              We believe in the power of quality ingredients and meticulous
              craftsmanship to deliver flavors that linger in your memory long
              after the last bite
            </p>
          </div>

          {/* <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-1.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-2.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-4.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-5.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-6.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-7.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href="assets/img/gallery/gallery-8.jpg"
                  className="gallery-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div> */}
          {/* </div> */}
        </div>

      </section>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
  <Album />
</div>

    </>
  );
};
export default gallery;
