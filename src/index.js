module.exports = function solveEquation(equation) {
  var arr = equation.split(' '); 
  var a = parseInt(arr[0]); 
  var b = (arr[3] === '-') ? -arr[4] : arr[4]; 
  var c = (arr[7] === '-') ? -arr[8] : arr[8];
  const d = (b*b) - (4*a*c);
  const x1 = Math.round((-b - Math.sqrt(d))/(2*a));
  const x2 = Math.round((-b + Math.sqrt(d))/(2*a));
  return [x1, x2].sort((a,b) => a-b);
}
