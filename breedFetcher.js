const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback("Failed to request data", null);
    }
    const data = JSON.parse(body);

    if (data[0]) {
      callback(null,data[0].description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }

  });


};

module.exports = { fetchBreedDescription };