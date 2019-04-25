var recipes = {Flour: '1 Gram', Eggs: 'Two', Milk: 'One Cup'};

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObject = Object.assign({}, object, {key:value});
  return cloneObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
}

function deleteFromObjectByKey(object, key) {
  var cloneObject = Object.assign({}, object);
  delete cloneObject.key
  return cloneObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object.key

}
