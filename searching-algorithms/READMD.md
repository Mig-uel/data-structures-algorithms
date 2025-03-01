# Searching Algorithms

## Objectives

- Describe what a searching algorithm is
- Implement a linear search on arrays
- Implement a binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

## How Do We Search?

```js
// all 50 states and territories in an array
const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
```

Given an array, the simplest way to search for a value is too look at every element in the array and check if it's the value we want.

This is called a **linear search**.

## JavaScript Has Search Methods

There are many different search methods on arrays in JavaScript:

- `indexOf`
- `includes`
- `find`
- `findIndex`

But how do these methods works?
These methods are all using a searching algorithm under the hood called linear search.

## Linear Search

Linear search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.

## Linear Search Pseudocode

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

```js
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]

    if (current === val) return i
  }

  return -1
}
```

The time complexity of linear search is O(n).
The space complexity of linear search is O(1).

## Linear Search Big O

- Best Case: O(1) (if the value is the first element in the array)
- Average Case: O(n) (if the value is in the array)
- Worst Case: O(n) (if the value is not in the array)

## Binary Search

Binary search is a much faster form of search.

- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.

However, there is a catch! **The array must be sorted**.

## Dividing and Conquering

Binary search works by dividing and conquering.

- Given a sorted array, binary search will start by comparing the middle element of the array to the target value.
- If the middle element is less than the target value, the target value is searched in the right half of the array.
- If the middle element is greater than the target value, the target value is searched in the left half of the array.
- This process continues until the target value is found or the subarray has no more elements.

Example:

Let's search for 15.

`[1,3,4,6,8,9,11,12,15,17,18]`

- Start by dividing the array in half
- Compare the middle element (11) to the target value (15)
- Since 11 < 15, we search the right half of the array
- Divide the right half of the array in half
- Compare the middle element (17) to the target value (15)
- Since 17 > 15, we search the left half of the array
- Divide the left half of the array in half
- Compare the middle element (15) to the target value (15)
- We found the target value!

## Binary Search Pseudocode

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

```js
function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const current = arr[middle]

    if (current === val) return middle
    if (current < val) left = middle + 1
    if (current > val) right = middle - 1
  }

  return -1
}
```

The time complexity of binary search is O(log n).
The space complexity of binary search is O(1).

## Binary Search Big O

- Best Case: O(1) (if the value is the middle element in the array)
- Average Case: O(log n) (if the value is in the array)
- Worst Case: O(log n) (if the value is not in the array)

## Naive String Search

Supposed you want to count the number of times a smaller string appears in a longer string. A straightforward approach involves checking pairs of characters individually.

## Naive String Search Pseudocode

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

```js
function naiveSearch(long, short) {
  let count = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }

  return count
}
```

The time complexity of naive string search is O(n \* m).
The space complexity of naive string search is O(1).