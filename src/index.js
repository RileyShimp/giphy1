import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $("#search").click(function(event){
    event.preventDefault();
    const input = $("#input").val();
    const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${process.env.API_KEY}`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response){
      let myImg = response.data[0].images.original.url;
      let htmlString = `<img src="${myImg}">`;
      $(".imgURL").html(htmlString);
    }
  });
  $("#trending").click(function(event){
    event.preventDefault();
    const url = `http://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response){
      let myImg = response.data[0].images.original.url;
      let htmlString = `<img src="${myImg}">`;
      $(".imgURL").html(htmlString);
    }
  });
  $("#random").click(function(event){
    event.preventDefault();
    const url = `http://api.giphy.com/v1/gifs/random?&api_key=${process.env.API_KEY}`;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();

    function getElements(response){
      let myImg = response.data.images.original.url;
      let htmlString = `<img src="${myImg}">`;
      $(".imgURL").html(htmlString);
    }
  });
});
  // $("#upload").click(function(event){
  //   event.preventDefault();
  //   input = "https://c.tenor.com/5LT51B0DSIoAAAAM/funny-animals-dog.gif";
  //   const url = `http://upload.giphy.com/v1/gifs/source_image_url:${input}&api_key=${process.env.API_KEY}`;
  //   let request = new XMLHttpRequest();
  //   request.onreadystatechange = function () {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const response = JSON.parse(this.responseText);
  //       getElements(response);
  //     }
  //   };
  //   request.open("GET", url, true);
  //   request.send();

  //   function getElements(response){
  //     let myImg = response.data.images.original.url;
  //     let htmlString = `<img src="${myImg}">`;
  //     $(".imgURL").html(htmlString);
  //   }
  // });

// function getElements(response) {
//   $(".showHumidity").text(
//     `The humidity in ${city} is ${response.main.humidity}%`
//   );
//   $(".showTemp").text(
//     `The temperature in Farenheit is ${response.main.temp} degrees.`
//   );
//   $(".showPressure").text(
//     `The pressure is ${response.main.pressure} units.`
//   );
//   $(".showWindSpeed").text(`The wind speed is ${response.wind.speed} MPH.`);
//   $(".showFeelsLike").text(
//     `The temperature feels like ${response.main.feels_like} degrees.`