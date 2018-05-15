import React from 'react';

const cardsInfo = [
  {
    icon: 'fas fa-id-card',
    title: 'Presentation',       
    text: "Dear visitor, first and foremost, welcome to my page. My name is Miguel Ponte and I am an Aerospace Engineer, who recently found a passion for web development. After working in the aeronautical field, I'm now eager to pursue my first job on the web industry, aspiring to become a Full Stack Web Developer.",
  },
  {
    icon: 'fas fa-fighter-jet',
    title: 'Background',
    text: "I was born in the middle of the atlantic ocean, on the Azores archipelago, in Portugal. When I was 18 years old, I moved to Lisbon, to start my degree in Aerospace Engineering. After completing my Bachelor's degree, I relocated to Munich for one year, under the Erasmus Exchange Programme, to start my Master's. I then returned to Lisbon, to finish my Master's Degree, and started working as a Continuous Airworthiness Assistant.",
  },
  {
    icon: 'fas fa-futbol pt-1',
    title: 'Interests',
    text: 'On my spare time, I enjoy taking care of my mind and body through sports, reading and meditation. I also love to play guitar and listen to music and podcasts.',
  }
];

// <h2 className="header-secondary my-5">
//       <span className="header-secondary__text">About Me</span>
//     </h2>

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
          <div className="gallery__card">
            <div className="gallery__box">
              <h3 className="gallery__box__header">{el.title}   </h3>
              <p className="gallery__box__text">{el.text}</p>
            </div>
        </div>))}
    </div>
      </div>
    </div>
  </section>
);

export default SectionAbout;

// <div className='mt-5'>
//             <div className='paragraph'>
//                 <p className='paragraph__text'>Dear Visitor, welcome to my personal page. <br /><br /> My name is Miguel Ponte and I am an Aerospace Engineer, who recently found a passion for web development.  <br /> After working in the aeronautical field, I'm now eager to pursue my first job on the web industry, aspiring to become a Full Stack Web Developer. <br /><br />
//                 On a more personal side, I was born in the Azores archipelago, Portugal. <br /> One of my core beliefs is that with hardwork and discipline everyone can achieve almost everything that they set their mind to. <br/>On my free time, I enjoy taking care of my mind and body through sports, reading, meditation, listening to music and to podcasts.
//                 </p>
//             </div>
//         </div>