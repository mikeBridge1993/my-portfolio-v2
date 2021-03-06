import React from 'react';

const cardsInfo = [
  {
    title: 'Dear visitor,',
    text: "First and foremost welcome to my personal page. My name is Miguel Ponte and I am an Aerospace Engineer, who recently found a passion for web development. After working in the aeronautical field, I'm now eager to pursue my first job on the web industry, aspiring to become a Full Stack Web Developer.",
  },
  {
    subHeader: 'To offer you some of my background,',
    text: "I was born in the middle of the atlantic ocean, on the Azores archipelago, in Portugal. When I was 18 years old, I moved to Lisbon, to start my degree in Aerospace Engineering. Upon completion of my Bachelor's, I relocated to Munich for one year to start my Master's degree. I then returned to Lisbon, to finish my Master's and started working as a Continuous Airworthiness Assistant.",
  },
  {
    icon: 'fas fa-futbol pt-1',
    title: '',
    subHeader: 'Regarding my interests,',
    text: 'I really enjoy to take care of my mind and body through sports, reading and meditation. I also love to play guitar and listen to music and podcasts.',
  },
];

const SectionAbout = () => (
  <section className="section-about" id="section-about">
    <div className="about-box">
      <div className="about-box__image" />
      <div className="about-box__information">
        <div className="gallery gallery--about">
          {cardsInfo.map(el => (
            <div className="gallery__card">
              {el.title && <h3 className="gallery__card__header text-left">{el.title}</h3>}
              {el.subHeader && <h4 className="gallery__card__subHeader">{el.subHeader}</h4>}
              <p className="gallery__card__text">{el.text}</p>
            </div>))}
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;
