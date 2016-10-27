'use strict';

var React = require('react');

var ListCard = React.creatClass({
    render: function(){
        var tempVacancies = [
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
        ];

        return (
            <div>Vacancies</div>
        );
    }
});

module.exports = ListCard;