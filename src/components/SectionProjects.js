import React from 'react';
import frontEndProject1 from '../img/projects/natours-project.png';
import frontEndProject2 from '../img/projects/miguelbettencourt-project.png';
import backEndProject1 from '../img/projects/xpensify-project.png';

const frontEndIcons = [['fab fa-html5', '#F16524'], ['fab fa-css3-alt', '#27A3E1'], ['fab fa-js', '#FDDE35'], ['fab fa-react', '#61DAFB'], ['fab fa-sass', '#CF649A'], ['devicon-bootstrap-plain', 'purple']];

const frontEndInfo = {
  title: 'Front End Development',
  text: 'Obtained Free Code Camp Front End Development certificate.',
  buttonText: 'Front End Certificate',
  buttonLink: 'https://www.freecodecamp.org/mikebridge1993/front-end-certification',
};

const frontEndProjects = [
  { 
    thumbnail: frontEndProject2,
    visitLink: 'https://www.miguelbettencourt.com/',
    gitLink: 'https://github.com/mikeBridge1993/miguel-bettencourt-portfolio',
  },
  { 
    thumbnail: frontEndProject1,
    visitLink: 'https://adoring-thompson-c19931.netlify.com/',
    gitLink: 'https://github.com/mikeBridge1993/advanced-css-course-natours',
  },
];

const backEndIcons = [['fab fa-node', '#90C53F'], ['devicon-express-original', 'white'], ['devicon-mongodb-plain', 'green']];


const backEndInfo = {
  title: 'Back End Development',
  text: 'Currently, on the last section of the Free Code Camp Back End Development curriculum (Dynamic Web Application Projects), focused on full stack apps, using the MERN stack.',
  buttonText: 'Free Code Camp Curriculum',
  buttonLink: 'https://www.freecodecamp.org/map',
};

const backEndProjects = [
  { 
    thumbnail: backEndProject1,
    visitLink: 'https://vast-atoll-44629.herokuapp.com/',
    gitLink: 'https://github.com/mikeBridge1993/react-course-expensify-app',
  },
];

const totalInfo = [{
  class: 'frontend',
  info: frontEndInfo,
  icons: frontEndIcons,
  projects: frontEndProjects,
},
{
  class: 'backend',
  info: backEndInfo,
  icons: backEndIcons,
  projects: backEndProjects,
}];

const SectionProjects = () => (
  <section className="section-projects" id="section-projects__card">
    <div className="projects-box">
      {totalInfo.map((el) => {
        return (
          <div className={"projects-box__" + el.class}>
            <div className="gallery gallery--projects">
              <div className="gallery__card">
                <h3 className="gallery__card__header">{el.info.title}</h3>
                <p className="gallery__card__text">{el.info.text}</p>
              </div>
            </div>
            <div className="projects-box__header mt-auto">Technologies Learned</div>
            <div className="projects-box__skills">
              {el.icons.map((ele, i) => {
              return (
                <div className="skill__card">
                  <i className={ele[0]} />
                </div>);
            })}
            </div>
            <div className="projects-box__header">Projects Developed</div>
            <div className="projects-box__reel">
              {el.projects.map((ele) => {
                return (
                  <div className="projects-box__reel__project">
                    <img className="projects-box__reel__image" src={ele.thumbnail} alt="" />
                    <div className="projects-box__reel__links-box">
                      <a href={ele.visitLink}><i className="fa fa-eye" /></a>
                      <a href={ele.gitLink}><i className="devicon-github-plain" /></a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>);
        })}
    </div>
  </section>
);

export default SectionProjects;
