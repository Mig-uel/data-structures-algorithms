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

_Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same._

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

Example 2:

_Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman._

Frequency Counter Solution:

```javascript
function validAnagram(first, second) {
  if (first.length !== second.length) return false

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]

    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      // decrement the letter
      lookup[letter] -= 1
    }
  }

  return true
}
```

Explanation:

- The function takes two strings as arguments.
- If the length of the strings are not the same, the function returns false.
- The function initializes an empty object, `lookup`.
- The function loops through the first string.
- For each letter in the first string, the function increments the frequency of the letter in `lookup`.
- The function then loops through the second string.
- For each letter in the second string, the function checks if the letter is in `lookup`.
- If the letter is not in `lookup`, the function returns false.
- If the letter is in `lookup`, the function decrements the frequency of the letter in `lookup`.
- If the loop completes, the function returns true.

## Multiple Pointers Pattern

Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well.

Example 1:

_Write a function sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist._

`sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]`
`sumZero([-2, 0, 1, 3]) // undefined`
`sumZero([1, 2, 3]) // undefined`

Naive Solution:

```javascript
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}
```

Explanation:

- The function takes an array as an argument.
- The function loops through the array.
- For each element in the array, the function loops through the rest of the array.
- If the sum of the two elements is 0, the function returns an array with the two elements.
- If the loop completes, the function returns undefined.

Time Complexity: O(N^2)
Space Complexity: O(1)

Refactored Solution:

```javascript
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  // while left is less than right (not equal) we keep looping
  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
```

Explanation:

- The function takes an array as an argument.
- The function initializes two pointers, `left` and `right`.
- The function loops while `left` is less than `right`.
- For each iteration, the function calculates the sum of the elements at the `left` and `right` pointers.
- If the sum is 0, the function returns an array with the two elements.
- If the sum is greater than 0, the function decrements the `right` pointer.
- If the sum is less than 0, the function increments the `left` pointer.
- If the loop completes, the function returns undefined.

Time Complexity: O(N)
Space Complexity: O(1)

## Multiple Pointers: Count Unique Values

_Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted._

`countUniqueValues([1, 1, 1, 1, 1, 2]) // 2`
`countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7`
`countUniqueValues([]) // 0`
`countUniqueValues([-2, -1, -1, 0, 1]) // 4`

My Solution:

```javascript
function countUniqueValues(arr) {
  if (!arr.length) return 0

  let first = 0
  let second = 1
  let uniqueValues = 0

  while (second <= arr.length) {
    if (arr[first] !== arr[second]) uniqueValues++

    first++
    second++
  }

  return uniqueValues
}
```

Explanation:

- The function takes an array as an argument.
- If the array is empty, the function returns 0.
- The function initializes three variables, `first`, `second`, and `uniqueValues`.
- The function loops while `second` is less than or equal to the length of the array.
- For each iteration, the function checks if the element at `first` is not equal to the element at `second`.
- If the elements are not equal, the function increments `uniqueValues`.
- The function increments `first` and `second` after each iteration.
- If the loop completes, the function returns `uniqueValues`.

Time Complexity: O(N)
Space Complexity: O(1)

Colt's Solution:

```javascript
function countUniqueValue(arr) {
  if (!arr.length) return 0

  let i = 0

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }

  return i + 1
}
```

Explanation:

- The function takes an array as an argument.
- If the array is empty, the function returns 0.
- The function initializes a variable `i` to 0.
- The function loops through the array starting from index 1.
- For each iteration, the function checks if the element at `i` is not equal to the element at `j`.
- If the elements are not equal, the function increments `i` and sets the element at `i` to the element at `j`.
- If the loop completes, the function returns `i + 1`.

Time Complexity: O(N)
Space Complexity: O(1)

## Sliding Window Pattern

This pattern involves creating a window which can either be an array or number from one position to another.
Depending on a certain condition, the window either increases or closes (and a new window is created).
Very useful for keeping track of a subset of data in an array/string etc.

Example 1:

_Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array._

`maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10`
`maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17`
`maxSubarraySum([4, 2, 1, 6], 1) // 6`
`maxSubarraySum([4, 2, 1, 6, 2], 4) // 13`
`maxSubarraySum([], 4) // null`

Naive Solution:

```javascript
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null

  let max = -Infinity

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0

    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }

    if (temp > max) {
      max = temp
    }
  }

  return max
}
```

Explanation:

- The function takes an array and a number as arguments.
- If the number is greater than the length of the array, the function returns null.
- The function initializes a variable `max` to -Infinity.
- The function loops through the array up to `arr.length - num + 1`.
- For each iteration, the function initializes a variable `temp` to 0.
- The function then loops through the next `num` elements in the array and adds them to `temp`.
- If `temp` is greater than `max`, the function sets `max` to `temp`.
- If the loop completes, the function returns `max`.

Time Complexity: O(N^2)
Space Complexity: O(1)

Refactored Solution:

```javascript
function maxSubArraySum(arr, num) {
  if (num > arr.length) return null

  let best = 0
  let curr = 0

  for (let index = 0; index < num; index++) {
    best += arr[index]
    curr += arr[index]
  }

  for (let index = num; index < arr.length; index++) {
    curr = curr + arr[index] - arr[index - num]
    best = Math.max(best, curr)
  }

  return best
}
```

Explanation:

- The function takes an array and a number as arguments.
- If the number is greater than the length of the array, the function returns null.
- The function initializes two variables, `best` and `curr`, to 0.
- The function loops through the first `num` elements in the array and adds them to `best` and `curr`.
- The function then loops through the rest of the array.
- For each iteration, the function updates `curr` by adding the current element and subtracting the element `num` positions back.
- The function updates `best` to the maximum of `best` and `curr`.
- If the loop completes, the function returns `best`.

Time Complexity: O(N)
Space Complexity: O(1)

## Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.

Example 1:

_Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1._

`search([1, 2, 3, 4, 5, 6], 4) // 3`
`search([1, 2, 3, 4, 5, 6], 6) // 5`
`search([1, 2, 3, 4, 5, 6], 11) // -1`

Naive Solution:

```javascript
function search(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i
  }

  return -1
}
```

Explanation:

- The function takes an array and an element as arguments.
- The function loops through the array.
- If the element is found in the array, the function returns the index.
- If the loop completes, the function returns -1.

Time Complexity: O(N)
Space Complexity: O(1)

Refactored Solution:

```javascript
function search(array, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let current = array[middle]

    if (array[middle] < val) {
      min = middle + 1
    } else if (array[middle] > val) {
      max = middle - 1
    } else return middle
  }

  return -1
}
```

Explanation:

- The function takes an array and an element as arguments.
- The function initializes two variables, `min` and `max`, to 0 and the length of the array minus 1, respectively.
- The function loops while `min` is less than or equal to `max`.
- For each iteration, the function calculates the middle index of the array.
- The function then checks if the element at the middle index is less than the value.
- If the element is less than the value, the function updates `min` to the middle index plus 1.
- If the element is greater than the value, the function updates `max` to the middle index minus 1.
- If the element is equal to the value, the function returns the middle index.
- If the loop completes, the function returns -1.

Time Complexity: O(log N)
Space Complexity: O(1)
