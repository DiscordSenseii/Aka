// Fetch Required Dependency //
const superagent = require('superagent');

module.exports = {

    // Get Your Icecream Handicaps //
    get: async function(params) { // <---- Deal with it, It's an Asyncronous Function
        let {body} = await superagent
            .get(`https://akaneko-api.herokuapp.com/api/${params}`);

        // Returns the "url" object from the body, my body, OUR body, but please don't look at my body, it's very sensitive to eyes ;)
        return body.url;
    }

} // <--- Hi, I'm a bracket, My Name is Bracket :)