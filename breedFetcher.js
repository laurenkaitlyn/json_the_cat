const request = require('request');

const breed = process.argv[2];
const abrvBreed = breed.substring(0,5);

request(`https://api.thecatapi.com/v1/breeds/search?q=${abrvBreed}`, function(error, response, body) {
  if (error) {
    console.log("error: ", error);
  }
  const data = JSON.parse(body);

  if (data[0]) {
    console.log(data[0].description);
  } else {
    console.log(`Failed to find breed ${breed}`);
  }

});