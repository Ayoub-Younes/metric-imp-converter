function ConvertHandler() {
  let reg1 = /^[^a-zA-Z]+/g;
  let reg2 = /[a-zA-Z]+$/g;
  let units = ['gal','l','mi','km', 'lbs', 'kg']
  let units_spell = ['gallons','liters','miles','kilometers', 'pounds', 'kilograms']
  this.getNum = function(input) {
    const number = input.match(reg1)? input.match(reg1)[0]:null;
    const regnum = /^\d*\.?\d+(\/\d+)?(\.\d+)*$/;
    if (number){
      return regnum.test(number)? eval(number) : null;
    }else{
      return 1;
    }
  };
  
  this.getUnit = function(input) {
    const unit = input.match(reg2)? input.match(reg2)[0].toLowerCase(): null;
    return units.includes(unit)? unit : null;
  };
  
  this.getReturnUnit = function(initUnit) {
    if(initUnit){
   const index = units.indexOf(initUnit.toLowerCase());
   const ReturnUnit = index%2 == 0? units[index+1]: units[index-1]
   return ReturnUnit == "l"? "L": ReturnUnit
  }
  };

  this.spellOutUnit = function(unit) {
    const index = units.indexOf(unit.toLowerCase());
    return units_spell[index]
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result=0;
    if (initUnit){
    switch(initUnit.toLowerCase()){
    case 'gal':
     result = initNum * galToL
     break;
    case 'l':
     result = initNum * 1/galToL
     break;
    case 'mi':
     result = initNum * miToKm
     break;
    case 'km':
     result = initNum * 1/miToKm
     break;
     case 'lbs':
     result = initNum * lbsToKg
     break;
    case 'kg':
     result = initNum * 1/lbsToKg
     break;
    }}
    
    
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let string
    let error = false;
    if(!initUnit && !initNum){
      string = "invalid number and unit"
      error = true;
    }
    else if(!initNum){
      string = "invalid number"
      error = true;
      
    }else if(!initUnit){
      string = "invalid unit"
      error = true;
    }
    else {
      string = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}` 
    }
    return [string,error]
  };
}
module.exports = ConvertHandler;
