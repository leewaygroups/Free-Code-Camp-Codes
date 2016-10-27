'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var VacancyClass = React.createClass({
    render: function(){
      var vacanciesclass = (function() {
        var vacancyClasses = [
          {
            name: "VACANCIES",
            component: "",
            css: "col-md-3 vacancy-class-link vacancy-link",
            link: "vacancies"
          },
          {
            name: "INTERNSHIPS",
            component: "",
            css: "col-md-3 vacancy-class-link internship-link",
            link: "vacancies"
          },
          {
            name: "ROSTERS",
            component: "",
            css: "col-md-3 vacancy-class-link roster-link",
            link: "vacancies"
          },
          {
            name: "BENCHES",
            component: "",
            css: "col-md-3 vacancy-class-link bench-link",
            link: "vacancies"
          }
        ];

        return vacancyClasses.map(function(classElem){
          return (
            <Link to={classElem.link}>
             <div className={classElem.css}>{classElem.name}</div>
            </Link>
          );
        });
      }());
      return (
            <div className="row js--vacancy-class">
              <div className="vacancy-class-section">
                {vacanciesclass}
              </div>
            </div>
      );
    }
});

module.exports = VacancyClass;