// Try edit msg
// unzip
function unzip(obj) {
  keyarr = [];
  valarr = [];
  
  var i = 0;
  for (var k in obj) {
    keyarr[i] = k;
    valarr[i] = obj[k];
    i++;
  }
  
  var person = {
    keys : keyarr,
    values : valarr
  }
  
  return (person);
}

function unzip2(obj) {
  var person = {keys : [], values : []};
  var i = 0;
  for (var k in obj) {
    person['keys'][i] = k;
    person['values'][i] = obj[k];
    i++;
  }
  return person;
}

var person = {
  name : 'Bob',
  age : 42
}

console.log(unzip2(person))
