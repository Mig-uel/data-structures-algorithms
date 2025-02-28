function flatten(arr) {
  let result = []

  for (let index = 0; index < arr.length; index++) {
    let current = arr[index]

    if (Array.isArray(current)) {
      result = result.concat(flatten(current))
    } else {
      result.push(current)
    }
  }

  return result
}

console.log(flatten([1, 2, 3, [4, 5]]))
