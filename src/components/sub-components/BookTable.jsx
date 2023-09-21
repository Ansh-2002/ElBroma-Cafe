import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
//template_nhtp21u
const BookTable = () => {

    const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
  
    // Display the loading message
    document.querySelector('.loading').style.display = 'block';
  
    emailjs
      .sendForm('service_6iu0gbq', 'template_nhtp21u', form.current, '1hBFvLTWkB4DNAtt2')
      .then((result) => {
        console.log(result.text);
        // Display the success message
        const successMessage = document.querySelector('.sent-message');
        successMessage.style.display = 'block';
  
        // Apply the fade-out animation to the success message
        setTimeout(() => {
          successMessage.classList.add('fade-out');
        }, 5000);
  
        // Hide the success message after the animation completes
        setTimeout(() => {
          successMessage.style.display = 'none';
          successMessage.classList.remove('fade-out');
        }, 5500);
      })
      .catch((error) => {
        console.error(error);
        // Display the error message
        const errorMessage = document.querySelector('.error-message');
        errorMessage.style.display = 'block';
  
        // Apply the fade-out animation to the error message
        setTimeout(() => {
          errorMessage.classList.add('fade-out');
        }, 5000);
  
        // Hide the error message after the animation completes
        setTimeout(() => {
          errorMessage.style.display = 'none';
          errorMessage.classList.remove('fade-out');
        }, 5500);
      })
      .finally(() => {
        // Hide the loading message
        document.querySelector('.loading').style.display = 'none';
      });
  };
    return (
        <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>Book a <span>Table</span></h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div>

          <form
            ref={form} 
            onSubmit={sendEmail}
            className="php-email-form"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="user_phone"
                  id="phone"
                  placeholder="Your Phone"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  onFocus="(this.type='date')"
              
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="text"
                  name="user_date"
                  className="form-control"
                  id="date"
                  placeholder="Date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="user_time"
                  id="time"
                  placeholder="Time"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                  required
                />
                <div className="validate"></div>
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  name="user_numberof"
                  id="people"
                  placeholder="# of people"
                  data-rule="minlen:1"
                  required
                  data-msg="Please enter at least 1 chars"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                name="user_message"
                rows="5"
                placeholder="Message"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message">
                There was an error. Please try again later.
              </div>
              <div className="sent-message">
                Your booking request was sent.Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    );
    }
export default BookTable;