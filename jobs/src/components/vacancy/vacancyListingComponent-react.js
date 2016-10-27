'use strict';

var React = require('react');
var VacancyCard = require('../common/listCardComponent-react.js');

var Vacancies = React.createClass({
    allVacancies: [
            {
                id: 100,
                postTitle: "FullStack web developer",
                jobCategory: "Information Technology",
                level: "IICA-2",
                postingDate: '2016-10-30',
                closingDate: '2016-11-30',
                DutyStation: 'Bangkok',
                Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
            },
            {
                id: 100,
                postTitle: "FullStack web developer",
                jobCategory: "Information Technology",
                level: "IICA-2",
                postingDate: '2016-10-30',
                closingDate: '2016-11-30',
                DutyStation: 'Bangkok',
                Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
            },
            {
                id: 100,
                postTitle: "FullStack web developer",
                jobCategory: "Information Technology",
                level: "IICA-2",
                postingDate: '2016-10-30',
                closingDate: '2016-11-30',
                DutyStation: 'Bangkok',
                Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
            },
            {
                id: 100,
                postTitle: "FullStack web developer",
                jobCategory: "Information Technology",
                level: "IICA-2",
                postingDate: '2016-10-30',
                closingDate: '2016-11-30',
                DutyStation: 'Bangkok',
                Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text"
            }
    ],
    render: function(){
        var vacancyList = this.allVacancies.map(function(vacancy){
            return (
                <VacancyCard item={vacancy} />
            );
        });
        return (
          <section className="section-vacancies-listing">
            <div className="row">
              <h2>Vacancies</h2>
            </div>
            <div className="row">
               {vacancyList}
            </div>
          </section>
        );
    }
});

module.exports = Vacancies;