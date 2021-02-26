// https://dog.ceo/dog-api/
// - Use this API along with axios to get the url to a random image for an Otterhound

// log the url to the console. make a Github respository to store this code

let axios = require('axios');

let url = "https://dog.ceo/api/breed/otterhound/images/random";

axios.get(url)
    .then( function(response) {
        console.log(response.data.message);
    })