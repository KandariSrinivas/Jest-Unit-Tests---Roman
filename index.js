
const convertToRoman = (num) => {
  if(!num) return undefined;
  var nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var rs = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var quo;
  var i = nums.length-1;
  var sol="";
  while(num>0){
      quo = num / nums[i];
      num = num % nums[i];
      sol = sol.concat(rs[i].repeat(quo));
      i--;
  }
  return sol;
};

const convertToInt = (r) => {
  let total =0;
  var mappings = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  var digits = r.split('');
  var bool = digits.some(d => !(Object.keys(mappings).includes(d)));
  if(bool) return NaN;
  digits.forEach((d, i) => {
    if(i !== digits.length-1) {
      total = mappings[d] >= mappings[digits[i+1]] ? total + mappings[d] : total - mappings[d];
    }
    else {
      total = total + mappings[d];
    }
  });
  return total;
}


console.log(convertToInt('CDXCIX'));

const evaluateRoman = (r1, r2, op) => {
  if(!r1 || !r2 || !op) return undefined;
  var num1 = convertToInt(r1);
  var num2 = convertToInt(r2);
  switch (op) {
      case '+':
        return convertToRoman(num1 + num2);
      case '-':
        return convertToRoman(num1 - num2);
      case '/':
        return convertToRoman(num1 / num2);
      case '*':
        return convertToRoman(num1 * num2);

    default:
      console.error('Please enter valid operator');
  }
}

module.exports = {convertToRoman, evaluateRoman, convertToInt};
