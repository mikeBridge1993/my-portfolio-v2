import React from 'react';

const cardsInfo = [
  {
    icon: 'fas fa-id-card',
    title: 'Dear visitor,', 
    text: "First and foremost welcome to my personal page. My name is Miguel Ponte and I am an Aerospace Engineer, who recently found a passion for web development. After working in the aeronautical field, I'm now eager to pursue my first job on the web industry, aspiring to become a Full Stack Web Developer.",
    position: "text-left",
    id:""
  },
  {
    icon: 'fas fa-fighter-jet',
    subHeader: 'To offer you some of my background,',
    text: "I was born in the middle of the atlantic ocean, on the Azores archipelago, in Portugal. When I was 18 years old, I moved to Lisbon, to start my degree in Aerospace Engineering. Upon completion of my Bachelor's, I relocated to Munich for one year to start my Master's degree. I then returned to Lisbon, to finish my Master's and started working as a Continuous Airworthiness Assistant.",
    position: "text-left",
    id:"background-text"
  },
  {
    icon: 'fas fa-futbol pt-1',
    title: '',
    subHeader: 'Regarding my interests,',    
    text: 'I really enjoy to take care of my mind and body through sports, reading and meditation. I also love to play guitar and listen to music and podcasts.',
    position: "text-left",
    id: "interests-text"
  }
];

const SectionAbout = () => (
  <section className="section-about" id="section-about">
    <div className="about-box">
      <div className="about-box__image">
      </div>
      <div className="about-box__border">
      </div>
      <div className="about-box__information">
        <div className="gallery gallery--about">
        {cardsInfo.map((el, i) => (
          <div className="gallery__card" id={el.id}>
            <h3 className={"gallery__card__header " + el.position}>{el.title}</h3>
            {el.subHeader && <h4 className="gallery__card__subHeader ">{el.subHeader}</h4>}
            <p className="gallery__card__text">{el.text}</p>
          </div>))}
        </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;