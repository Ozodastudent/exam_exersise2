const salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

function sumSalaries(salaries) {
  var sum = 0;
  for (var i = 0; i < salaries.length; i++) {
    sum += salaries[i];
  }
  return sum;
}
alert(sumSalaries([1200, 5200, 1800]));
