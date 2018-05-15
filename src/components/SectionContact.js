import React from 'react';

const SectionContact = () => (
  <section className="section-contact">
    <h2 className="header-secondary">
      <span className="header-secondary__text">Contact</span>
    </h2>
    <div className="mt-4">
      <div className="contact-form__box">
        <form method="POST" action="https://formspree.io/miguelponte93@hotmail.com" className="contact-form">
          <div className="contact-form__info">
            <div className="contact-form__group">
              <label className="contact-form__label"  htmlFor="name">
              Name
              </label>
              <input id="name" type="text" required className="contact-form__input" />
            </div>
            <div className="contact-form__group">       
              <label className="contact-form__label" htmlFor="email">
              Email
              </label>   
              <input id="email" type="text" required className="contact-form__input" />
            </div>
          </div>
          <div className="contact-form__text">
            <div className="contact-form__group">
              <label className="contact-form__label"  htmlFor="message">
              Message
              </label>
              <textarea id="message" type="text" required className="contact-form__input" name="text" />
            </div>
            </div>
            <div className="mt-5">
              <button className="button button--primary" type="submit">Submit</button>
            </div>
            <input type="hidden" name="_next" value="https://laughing-babbage-121804.netlify.com/contact" />
        </form>
      </div>
    </div>
  </section>
);

export default SectionContact;
