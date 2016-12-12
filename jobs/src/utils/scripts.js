'use strict';

var $ = require('./vendors/jquery.waypoints.js');

var UtilService = {
      toggleNavigationToDynamic: function(){
        $(document).ready(function(){
          $('.js--vacancy-class').waypoint(function(direction){
            if(direction === "down" ){
                $('nav').addClass('sticky');
            }else{
                $('nav').removeClass('sticky');
            }
          }, {offset: '2%'});

      });
    },

    toggleNavigationToFixed: function(){
       $('nav').removeClass('sticky');
       $("header").css('background-image', 'none');
    }

};

module.exports = UtilService;

// <HomeBanner />
// <VacancyClass />
// <WorkWithUs />
// <VacanciesSection />
// <VoicesFromTheField />
// <VacancySubcription />