const needle = require('needle');

const URL = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

needle.get(URL, (error, response, body) => {
  if (error) {
    console.error('Error occurred:', error);
    return;
  }

  // Check if breed data is available
  if (body.length === 0) {
    console.log('Breed not found.');
    return;
  }

  const breed = body[0]; // first object in array
  console.log(breed.description); // print the description
});
