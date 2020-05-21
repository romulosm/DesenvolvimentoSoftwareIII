var axios = require('axios');
var config = require('../config/index');

module.exports = {
  consultaAPI: (data, handler) => {
    var cidade = data.cidade;
    var url = config.url + cidade + "&mode=json&units=metric&APPID=" + config.token;
    axios.get(url, {})
      .then(function (response, err) {
        handler(err, response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}