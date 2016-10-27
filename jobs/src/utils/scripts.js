'use strict';

var $ = require('./vendors/jquery.waypoints.js');

var UtilService = function(){
    $(document).ready(function(){
        
        $('.js--vacancy-class').waypoint(function(direction){
           if(direction === "down" ){
               $('nav').addClass('sticky');
           }else{
               $('nav').removeClass('sticky');
           }
        }, {offset: '2%'}); 

    });
};

// <Header />
// <VacancyClass />
// <WorkWithUs />
// <VacanciesSection />
// <VoicesFromTheField />
// <VacancySubcription />
// <Footer />


// <DefaultRoute handler={Home}></DefaultRoute>
// <NotFoundRoute name="notfound" handler={NotFound} />

module.exports = UtilService;