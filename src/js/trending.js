export default class Trending {
  static getTrend() {
    return new Promise(function(resolve,reject){
      const url = `http://api.giphy.com/v1/gifs/trending?&api_key=${process.env.API_KEY}`;
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