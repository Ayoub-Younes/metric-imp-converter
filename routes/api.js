const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.get('/api/convert',(req, res) => {
    const input = req.query.input
    let [initNum, initUnit] = [convertHandler.getNum(input), convertHandler.getUnit(input)]
    initUnit = initUnit == 'l'? 'L': initUnit; 
    let [returnNum, returnUnit] = [convertHandler.convert(initNum,initUnit), convertHandler.getReturnUnit(initUnit)]
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
    if(string[1]){
      res.type('txt').send(string[0])
    }else{
      res.json({'initNum':initNum, 'initUnit':initUnit, 'returnNum':returnNum, 'returnUnit': returnUnit, 'string':string[0]})
    }
  })

};
