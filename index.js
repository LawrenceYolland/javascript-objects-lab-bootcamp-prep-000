var recipes = {Flour: '1 Gram', Eggs: 'Two', Milk: 'One Cup'};

function updateObjectWithKeyAndValue(object, key, value) {
  cloneObject = object.assign({}, object, {key:value})
  return cloneObject;
}