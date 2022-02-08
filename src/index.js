import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Search from './js/search.js';
import Trending from './js/trending';
import Random from './js/random';

let clearInput = () => {
  $('#search').val("");
};

$(document).ready(function() {
  $("#search").click(function() {
    let input = $("#input").val();
    clearInput();
    let promise = Search.getImage(input);
    promise.then(function(response) {
      const body = JSON.parse(response);
      const myImg = body.data[0].images.original.url;
      let htmlString = `<img src="${myImg}">`;
      $(".imgURL").html(htmlString);
    },function(error) {
      console.log(error);
    });
  });

  $("#trending").click(function(){
    let promise2 = Trending.getTrend();
    promise2.then(function(response){
      const body2 = JSON.parse(response);
      let myImg2 = body2.data[0].images.original.url;
      let htmlString = `<img src="${myImg2}">`;
      $(".imgURL").html(htmlString); 
    },function(error) {
      console.log(error);
    }); 
  });

  $("#random").click(function(){
    let promise3 = Random.getRandom();
    promise3.then(function(response){
      const body3 = JSON.parse(response);
      let myImg3 = body3.data.images.original.url;
      let htmlString = `<img src="${myImg3}">`;
      $(".imgURL").html(htmlString);
    }, function(error) {
      console.log(error);
    });
  });
});