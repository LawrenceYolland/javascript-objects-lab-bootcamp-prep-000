var recipes = {Flour: '1 Gram', Eggs: 'Two', Milk: 'One Cup'};

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObject = Object.assign({}, object, {key:value});
  return cloneObject;
}