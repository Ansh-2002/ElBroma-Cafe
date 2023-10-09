import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  email,
  openDays,
  openTime,
  phone1,
  phone2,
  openTimeWheels,
  openDaysWheels,
} from "../constants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Display the loading message
    document.querySelector(".loading").style.display = "block";

    emailjs
      .sendForm(
        "service_6iu0gbq",
        "template_bqn6umc",
        form.current,
        "1hBFvLTWkB4DNAtt2"
      )
      .then((result) => {
        console.log(result.text);
        // Display the success message
        const successMessage = document.querySelector(".sent-message");
        successMessage.style.display = "block";

        // Apply the fade-out animation to the success message
        setTimeout(() => {
          successMessage.classList.add("fade-out");
        }, 5000);

        // Hide the success message after the animation completes
        setTimeout(() => {
          successMessage.style.display = "none";
          successMessage.classList.remove("fade-out");
        }, 5500);
      })
      .catch((error) => {
        console.error(error);
        // Display the error message
        const errorMessage = document.querySelector(".error-message");
        errorMessage.style.display = "block";

        // Apply the fade-out animation to the error message
        setTimeout(() => {
          errorMessage.classList.add("fade-out");
        }, 5000);

        // Hide the error message after the animation completes
        setTimeout(() => {
          errorMessage.style.display = "none";
          errorMessage.classList.remove("fade-out");
        }, 5500);
      })
      .finally(() => {
        // Hide the loading message
        document.querySelector(".loading").style.display = "none";
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>
              <span>Contact</span> Us
            </h2>
            {/* <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p> */}
          </div>
        </div>

        <div className="map">
          {/* <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.444239235319!2d77.0657751!3d28.405849399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e9b8539c6f%3A0x599b59751e9f85e4!2sEl%20Broma%20Bakery%20and%20Cafe!5e0!3m2!1sen!2sin!4v1693599317342!5m2!1sen!2sin"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: '0' }}
                            allowFullScreen
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe> */}
          <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/d/u/0/embed?mid=14MRFWC9p3YVS-Zmoehc1MjtShyGUhOw&ehbc=2E312F&noprof=1"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            style={{ border: '0' }}
                            allowFullScreen
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
   
        </div>

        <div className="container mt-5">
          <div className="info-wrap">
            <div className="row">
              <div className="col-lg-3 col-md-6 info mb-4">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>

                <p>
                  UG-01, R5, 65th Avenue, Golf Course Ext Rd
                  <br /> Sector 65. Gurugram, Haryana 122018
                </p>
              </div>
              <div className="col-lg-3 col-md-6 info ">
                <i className="bi bi-geo-alt"></i>
                <h4>Location: (on wheels)</h4>

                <p>Huda market, sector 56, Gurgaon </p>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0 ">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  {openDays}
                  <br />
                  {openTime}
                </p>
              </div>
              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:(on wheels)</h4>
                <p>
                  {openDaysWheels}
                  <br />
                  {openTimeWheels}
                </p>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>
                  {email}
                  <br />
                  {/* contact@example.com */}
                </p>
              </div>

              <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>
                  {phone1}
                  <br />
                  {phone2}
                </p>
              </div>
            </div>
          </div>

          {/* <form ref={form} onSubmit={sendEmail} className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="user_email"  id="email" placeholder="Your Email" required
               />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message">Their was an error. Plese try again later</div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form> */}
        </div>
      </section>
    </>
  );
};
export default Contact;
