export default class Search {
  static getImage(input) {
    return new Promise (function(resolve,reject) { 
      const url = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${process.env.API_KEY}`;
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}