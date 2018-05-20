import React from 'react';

const SectionContact = () => (
  <section className="section-contact">
    <div className="contact-box">
      
      <form method="POST" action="https://formspree.io/miguelponte93@hotmail.com" className="contact-form">
      <div className="contact-form__header">If you have any doubt or question and would like to get in touch, please feel free to reach me through any of the means below.
      </div>
        <div className="contact-form__info mt-4">
          <div className="contact-form__group">
            <label className="contact-form__label"  htmlFor="name">
            Name*
            </label>
            <input name="name" type="text" required className="contact-form__input" />
          </div>
          <div className="contact-form__group">       
            <label className="contact-form__label" htmlFor="email">
            Email*
            </label>   
            <input name="email" type="text" required className="contact-form__input" />
          </div>
        </div>
        <div className="contact-form__text">
          <div className="contact-form__group">       
            <label className="contact-form__label" htmlFor="subject">
            Subject
            </label>   
            <input name="subject" type="text" className="contact-form__input" />
          </div>
          <div className="contact-form__group">
            <label className="contact-form__label"  htmlFor="message">
            Message*
            </label>
            <textarea name="message" type="text" required className="contact-form__input" name="text" />
          </div>
          </div>
          <div className="mt-5 mb-5 pb-5">
            <button className="button button--primary" type="submit">Send Message</button>
            <a className="button button--primary mx-3" href="mailto:miguelponte93@hotmail.com"><i className="fa fa-envelope-o"></i></a>
            <a className="button button--primary" href="https://www.linkedin.com/in/miguelsmponte/"><i className="fab fa-linkedin-in"></i></a>
          </div>
          
          <input type="hidden" name="_next" value="http://localhost:8000/contact/" />
          
      
      </form>
      
    </div>
  </section>
);

export default SectionContact;
