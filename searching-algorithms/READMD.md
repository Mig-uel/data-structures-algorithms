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
