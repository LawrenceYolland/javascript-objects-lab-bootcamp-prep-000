var recipes = {Flour: '1 Gram', Eggs: 'Two', Milk: 'One Cup'}

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes.assign(recipes,{key:value})
}