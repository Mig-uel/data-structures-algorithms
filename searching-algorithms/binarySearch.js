function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1

  if (arr[left] === val) return left
  if (arr[right] === val) return right

  while (left <= right) {
    let guess = Math.floor((left + right) / 2)

    if (val === arr[guess]) return guess
    else if (arr[guess] < val) left = guess + 1
    else right = guess - 1
  }

  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))
