const footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          {/* <h3 className="alex-font">El Broma</h3> */}
          <div className="logo me-auto" >
            <h2 className="alex-font pt-4 mb-0">
              <a href="/">
                <b style={{color:"white",fontSize:"36px"}}>El Broma</b>
              </a>
            </h2>
            <i>
              <p className="arimo-font">A little bliss in every bite</p>
            </i>
          </div>
          <p>
           Indulge yourself into the goodness of aromatic coffee, delicious desserts, & mouth-watering food.
          </p>
          <div className="social-links">
            {/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a> */}
            <a
              href="https://www.facebook.com/profile.php?id=100090019427391"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/_elbroma_/"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a> */}
            <a
              href="https://www.linkedin.com/in/el-broma-bakery-and-cafe-5124a3272/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span className="alex-font">El Broma</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};
export default footer;
