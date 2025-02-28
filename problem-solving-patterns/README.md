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
