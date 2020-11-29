const fetch = require('node-fetch');

module.exports = {

    get: async function (params) {

        return fetch(`https://akaneko-api.glitch.me/api/${params}`)
            .then(res => res.json())
            .then(json => { return json.url });

    }
}