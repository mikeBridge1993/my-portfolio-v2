import React from 'react';

let timelineInfo = [
  {year: 'Sep 2011 - Jul 2014', text: 'Bachelor’s Degree in Aerospace Engineering, in Lisbon (Instituto Superior Técnico).'},
  {year: 'Sep 2014 - Aug 2015', text: "Started Master's Degree in Aerospace Engineering, in Munich (Technische Universität München)."},
  {year: 'August 2015 - August 2016', text: "Finished Master's Degree in Aerospace Engineering, in Lisbon (Instituto Superior Técnico)."},
  {year: 'Jul 2016 - Dec 2017', text: 'Worked as Continuous Airworthiness Assistant, in Lisbon (Lease Fly Aviation Services) and started studying web development on my spare time.'},
  {year: 'Jan 2018 - in progress', text: 'Devoted full time to learn web development.'}
];

timelineInfo = timelineInfo.reverse();

const SectionResume= () => (
  <section className='section-resume'>
    <div className="mt-5 pt-4">
      {timelineInfo.map((el, i) => {
        let type = '';

        if (i % 2 === 0) {
          type = 'timeline__container timeline__container--left';
        } else {
          type = 'timeline__container timeline__container--right'
        }

        return (
          <div className="timeline">
            <div className={type}>
              <div className="timeline__content">
                <h3>{el.year}</h3>
                <p>{el.text}</p>
              </div>
            </div>
          </div>);
      })}
    </div>
    <div className="mt-5 text-center">
      <button className="button button--primary" type="submit"><a className="button__link" href="https://res.cloudinary.com/duwpl9hjf/image/upload/v1525772156/myportfolio/CV/CV.pdf">PDF File <i className="far fa-file-pdf ml-2" aria-hidden="true" /></a></button>
    </div>
  </section>
);

export default SectionResume;
