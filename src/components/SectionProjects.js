import React from 'react';
import frontEndProject1 from '../img/projects/natours-project.png';
import frontEndProject2 from '../img/projects/miguelbettencourt-project.png';
import backEndProject1 from '../img/projects/xpensify-project.png';

const frontEndIcons = [['fab fa-html5', '#F16524'], ['fab fa-css3-alt', '#27A3E1'], ['fab fa-js', '#FDDE35'], ['fab fa-react', '#61DAFB'], [ 'fab fa-sass', '#CF649A'],['icon-bootstrap',  '#644193']];

const backEndIcons = [['fab fa-node', '#90C53F'], ['icon-mongodb', 'green']];

const frontEndInfo = {
  title: 'Front End Development',        
  text: 'Completed Free Code Camp Front End Development curriculum.',
  buttonText: "Front End Certificate",
  buttonLink: "https://www.freecodecamp.org/mikebridge1993/front-end-certification"
}

const backEndInfo = {
  title: 'Back End Development',
  text: 'Currently, on the last section of the Free Code Camp Back End Development curriculum (Dynamic Web Application Projects), focused on full stack apps, using the MERN stack.',
  buttonText: "Free Code Camp Curriculum",
  buttonLink: "https://www.freecodecamp.org/map",
}

const projects = [
  { 
    thumbnail: frontEndProject1,
    link:'https://adoring-thompson-c19931.netlify.com/',
  },
  { 
    thumbnail: frontEndProject2,
    link:'https://www.miguelbettencourt.com/',
  },
  { 
    thumbnail: backEndProject1,
    link:'https://vast-atoll-44629.herokuapp.com/',
  },
  { 
    thumbnail: backEndProject1,
    link:'https://vast-atoll-44629.herokuapp.com/',
  }
];

// const totalInfo = [
//   {
//     cards: frontEndCards,
//     info: frontEndInfo
//   },
//   {
//     cards: backEndCards,
//     info: backEndInfo
//   },
//   {
//     cards: backEndCards,
//     info: webStackInfo
//   },
// ];

const SectionProjects = () => (
  <section className="section-projects" id="section-projects__card">
    <div className="projects-box">
      <div className="projects-box__section" />
      <div className="projects-box__border" />
      <div className="projects-box__text">
        <div className="projects-box__frontend-text">
          <div className="gallery gallery--projects gallery--projects--frontend">
            <div className="gallery__card">
              <div className="gallery__box">
                <h3 className="gallery__box__header">{frontEndInfo.title}   </h3>
                <p className="gallery__box__text">{frontEndInfo.text}</p>
                <div className="projects-box__skills mt-5">
                  {frontEndIcons.map((el, i) => {
                    return <div className="skills__box skills__box--frontend">
                            <div className="skills__box__icon">
                            <i className={el[0]}></i>
                            </div>
                          </div>
                  })}
                </div>
                {/**<button className="button button--gold"><a href={frontEndInfo.buttonLink}>{frontEndInfo.buttonText}</a></button>**/}
              </div>
            </div>
          </div>
        </div>
        <div className="projects-box__backend-text">
          <div className="gallery gallery--projects gallery--projects--backend">
            <div className="gallery__card">
              <div className="gallery__box">
                <h3 className="gallery__box__header">{backEndInfo.title}</h3>
                <p className="gallery__box__text">{backEndInfo.text}</p>
                <div className="projects-box__skills">
                {backEndIcons.map((el, i) => {
                  return <div className="skills__box skills__box--backend mt-5">
                          <div className="skills__box__icon mt-5">
                          <i className={el[0]}></i>
                          </div>
                        </div>
                  })}
                </div>
                <button className="button button--gold"><a href={backEndInfo.buttonLink}>{backEndInfo.buttonText}</a></button>
              </div>
            </div>
           
          </div>
        </div>
        
      </div>
      <div className="projects-box__reel">
        {projects.map((el) => {
            return (
              <div className="projects-box__reel__project">
                <a href={el.link} className="projects-box__reel__link">
                  <img className="projects-box__reel__image" src={el.thumbnail} alt=""/>
                </a>
              </div>
            );
        })}
      </div>
      <div className="projects-box__reel-back">
        {frontEndIcons.map((el) => {
            return (
              <div className="projects-box__reel__project">
             
                <div className="skills__box skills__box--backend mt-5">
                        <div className="skills__box__icon mt-5">
                        <i className={el[0]}></i>
                        </div>
                      </div>
             
              </div>
            );
        })}
      </div>
    </div>
  </section>
);


export default SectionProjects;

// const SectionProjects = () => (
//   <section className="section-about" id="section-about">
//     <div className="projects-box">
//       {totalInfo.map((el) => {
//         return ( 
//           <div className="projects-box__row">
//             <div className="projects-box__gallery">
//               {el.cards.map((ele) => {
//                 return ( 
//                   <div className={"projects-box__gallery__item"}>
//                     <a href={ele.link} className="projects-box__gallery__link">
//                       <img className="projects-box__gallery__image" src={ele.thumbnail} alt=""/>
//                     </a>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="projects-box__information text-dark">
//               <div className="gallery__card gallery--about__card">
//                 <div className="gallery__box">
//                   <h3 className="gallery__box__header">{el.info.title}</h3>
//                   <p className="gallery__box__text">{el.info.text}</p>
//                   <button className="button button--gold"><a href={el.info.buttonLink}>{el.info.buttonText}</a></button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </section>
// );


// export default SectionProjects;

// <div className="projects__card">
//               <img src="https://scontent.flis5-1.fna.fbcdn.net/v/t1.15752-9/32090027_1986623558267129_6769063089233985536_n.png?_nc_cat=0&oh=f5ee414c6bb603e51fe3da854263a592&oe=5B95A2F4" alt=""/>
//               </div>


// <h2 className="header-secondary mb-1">
// <span className="header-secondary__text">Projects</span>
// </h2>
// <div className="gallery gallery--projects mt-4">
// {cardsInfo.map((el, i) => {

// const buttonJSX = (
//   <div className="text-center">
//     <button className="button button--primary" type="submit"><a className="button__link" href="https://www.freecodecamp.org/mikebridge1993/front-end-certification">Front End Certificate <i className="far fa-file-pdf ml-2 text-light" aria-hidden="true" /></a></button>
//   </div>);

// return (
//   <div className="gallery__card">
//     <div className="gallery__box">
//       <i className={'fa mb-4 gallery__box__icon ' + el.icon} aria-hidden="true" />
//       <h3 className="text-secondary">{el.title}</h3>
//       <p className="gallery__box__text text-left">{el.text}</p>
//       {i === 0 && buttonJSX}
//   </div>
//   <div className="projects mt-2">
//         <a href="https://www.miguelbettencourt.com/" className="projects__card">
//           <img src="https://scontent.flis5-1.fna.fbcdn.net/v/t1.15752-9/32104942_1986606944935457_978258881329233920_n.png?_nc_cat=0&oh=fd6ba4c43c19508202ad6d57981b8c21&oe=5B873C83" alt=""/>
//         </a>
//         <a href="https://www.miguelbettencourt.com/" className="projects__card">
//         <img src="https://scontent.flis5-1.fna.fbcdn.net/v/t1.15752-9/32155831_1986623284933823_4301944921343918080_n.png?_nc_cat=0&oh=329432088b4806de099093a0a7330dce&oe=5B4F4D6F" alt=""/>
//         </a>
        
//       </div>
//     </div>);
// })}
// </div>



// <section className="section-projects">
//         <div className="projects__box">
//           <div className="filter mb-5">
//             <button id="front-end-filter" className="button button--gold" onClick={this.onButtonClick} >Front End Status</button>
//             <button id="back-end-filter" className="button button--gold" onClick={this.onButtonClick}>Back End Status</button>
//             <button id="back-end-filter" className="button button--gold" onClick={this.onButtonClick}>Web Stack Status</button>
//           </div>
//           <div className="projects__gallery">
//             {filterItems.map((el) => {
//               return ( 
//                 <div className={"projects__gallery__item filter-item "  + el.category}>
//                   <a href={el.link} className="projects__gallery__link">
//                     <img className="projects__gallery__image" src={el.thumbnail} alt=""/>
//                   </a>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="filter mb-5">
//             <span id="front-end-filter" className="filter__element" onClick={this.onButtonClick} >Technologies</span>
//           </div>
//       </section>







// let skillsGalleries = [];
// let gallery = [];

// skillsIcons.map((el, i, arr) => {
//   gallery.push(el);

//   if ((i + 1) % 4 === 0) {
//     skillsGalleries.push(gallery);
//     gallery = [];
//   }

//   if (i === arr.length - 1) {
//     skillsGalleries.push(gallery);
//   }
// });











// const skillsIcons = [['fab fa-html5', '#F16524'], ['fab fa-css3-alt', '#27A3E1'], ['fab fa-js', '#FDDE35'], ['icon-bootstrap',  '#644193'],[ 'fab fa-sass', '#CF649A'], ['fab fa-react', '#61DAFB'], ['fab fa-node', '#90C53F'], ['icon-mongodb', 'green']];







// onButtonClick = (e) => {
//   const buttonType = e.target.id;
//   const listFrontend = document.getElementsByClassName('filter-item--front-end');
//   const listBackend = document.getElementsByClassName('filter-item--back-end');
//   console.log(buttonType);

//   // if(buttonType == "front-end-filter") {
//   //   for(let i = 0; i < listFrontend.length; i++) {
//   //       listFrontend[i].style.transform = "scale(1)";
//   //       listFrontend[i].style.display = "flex";
        
//   //   }
    
//   //   for(let j = 0; j < listBackend.length; j++) {
//   //     listBackend[j].style.transform = "scale(0)";
//   //     listBackend[j].style.display = "none";
      
//   //   }
//   // } else {
//   //   for(let i = 0; i < listFrontend.length; i++) {
//   //     listFrontend[i].style.transform = "scale(0)";
//   //     listFrontend[i].style.display = "none";
      
//   //   }

//   //   for(let j = 0; j < listBackend.length; j++) {
//   //     listBackend[j].style.transform = "scale(1)";
//   //     listBackend[j].style.display = "flex";
      
//   //   }
//   // }
// }