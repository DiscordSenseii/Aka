const fetch = require("node-fetch");

module.exports = {
  get: async function (params) {
    return fetch(`http://cuteasfubuki.cf/api/${params}`)
      .then((res) => res.json())
      .then((json) => {
        return json.url;
      });
  },
};
