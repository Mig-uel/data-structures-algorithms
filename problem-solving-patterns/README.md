# Problem Solving Patterns

## How Do You Improve?

1.  ~~Devise a plan for solving problems.~~
2.  Master common problem solving patterns.

## Some Patterns...

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Etc.

All of these are different approaches, different patterns for writing code.

## Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

Example 1:

**Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.**

Naive Solution:

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }

  return true
}
```

Explanation:

- The function takes two arrays as arguments.
- If the length of the arrays are not the same, the function returns false.
- The function then loops through the first array.
- For each element in the first array, the function finds the index of the squared element in the second array.
- If the index is -1, the function returns false.
- If the index is not -1, the function removes the element from the second array.
- If the loop completes, the function returns true.

Refactored Solution:

```javascript
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}
```

Explanation:

- The function takes two arrays as arguments.
- If the length of the arrays are not the same, the function returns false.
- The function initializes two empty objects, `frequencyCounter1` and `frequencyCounter2`.
- The function loops through the first array and adds the frequency of each element to `frequencyCounter1`.
- The function loops through the second array and adds the frequency of each element to `frequencyCounter2`.
- The function then loops through the keys of `frequencyCounter1`.
- For each key, the function checks if the square of the key is in `frequencyCounter2`.
- If the square of the key is not in `frequencyCounter2`, the function returns false.
- If the frequency of the square of the key is not the same as the frequency of the key, the function returns false.
- If the loop completes, the function returns true.
