'use strict';

var React = require('react');

var VacancySection = React.createClass({

    render: function(){
        return (
            <section className="section-vacancies">
              <div className="row">
                <ul className="vacancies-showcase">
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/1.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/2.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/3.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/4.jpg" alt="" />
                    </figure>
                  </li>
                </ul>
                 <ul className="vacancies-showcase">
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/1.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/2.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/3.jpg" alt="" />
                    </figure>
                  </li>
                  <li>
                    <figure className="vacancies-photo">
                      <img src="../images/4.jpg" alt="" />
                    </figure>
                  </li>
                </ul>
              </div>
            </section>
        );
    }
});

module.exports = VacancySection;