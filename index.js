var recipes = {Flour: '1 Gram', Eggs: 'Two', Milk: 'One Cup'};

function updateObjectWithKeyAndValue(recipes, key, value) {
  var cloneObject = Object.assign({}, object, {key:value});
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  
}

function deleteFromObjectByKey(recipes, key) {
  var cloneObject = Object.assign({}, object);
  delete cloneObject.key
  return cloneObject
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  return delete object.key

}
