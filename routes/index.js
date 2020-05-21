var express = require('express');
var router = express.Router();
var modulo = require('../modules/index');

router.get('/temperatura/:cidade', (req, res, next) => {
  try {
    const cidade = req.params.cidade;
    const dataToInsert = {cidade};

    const handler = (err, response) => {
      if (!err) {
        res.json({"temperatura": response.data.main.temp});
      }
      else {
        res.json({
          success: false,
          message: 'Houve algum erro, por favor verifique os dados',
        });
      }
    }

    modulo.consultaAPI(dataToInsert, handler);

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
