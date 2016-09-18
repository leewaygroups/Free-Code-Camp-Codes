'use strict';

var $ = require('jQuery');


var baseUrl = 'https://api.twitch.tv/kraken/streams/';
var channels = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];
var normalise = function(data){
    if(data.stream === null){
      data.offline = true;
    }else if(data.stream === undefined) {
      data.closed = true;
    }else {
      data.online = true;
    }
    if(data.stream){
      data.image = data.stream.channel.logo;
    }else{
      data.image = 'https://cdn-images-1.medium.com/max/800/1*V6aVNu8tAqXz7bmsde-RMA.jpeg';
    }

    return data;
};

var getter = {
  getAllStreams: function () {
    var result = [];
    return new Promise(function(resolve, reject){
        channels.forEach(function(channel){
          $.ajax({
            type: 'GET',
            url: baseUrl + channel,
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Client-ID", "mc9w0nti3adhy2jy1q3svkrrujt5ns6");
            },
            dataType: 'json',
            success: function(data) {
              data.name = channel;
              data = normalise(data);
              result.push(data);
              if(result.length === channels.length){
                console.log(result);
                resolve(result);
              }
            },
            error: function(err) { console.log(err); }
          });
        });
    });
  }
};

module.exports = getter;