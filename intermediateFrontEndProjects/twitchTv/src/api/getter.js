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
    "noobs2ninjas",
    "brunofin",
    "comster404"
  ];
var normalise = function(data){
  if(data.status !== 404){
      if(data.stream === null || data.stream === undefined){
        data.offline = true;
        data.image = 'https://cdn-images-1.medium.com/max/800/1*V6aVNu8tAqXz7bmsde-RMA.jpeg';
      }else {
        data.online = true;
        data.image = data.stream.channel.logo;
        data.url = data.stream.channel.url;
        data.streaming = data.stream.game;
      }
      return data;

    }else{
       data.image = 'https://cdn-images-1.medium.com/max/800/1*V6aVNu8tAqXz7bmsde-RMA.jpeg';
       data.closed = true;
       return data;
    }
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
                resolve(result);
              }
            },
            error: function(err) {
              var data = {
                status: 404
              };
              data.name = channel;
              data = normalise(data);
              result.push(data);
              if(result.length === channels.length){
                resolve(result);
              }
            }
          });
        });
    });
  }
};

module.exports = getter;