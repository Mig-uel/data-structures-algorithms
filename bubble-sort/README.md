# Bubble Sort

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue
- Sorting movies based on ratings

Bubble Sort is one of the simplest sorting algorithms available. It is not suitable for large data sets as its average and worst case complexity are of Ο(n^2) where n is the number of items.

## Why Do We Need Sorting?

Sorting is an incredibly common task, so it's good to have a basic understanding of how sorting algorithms work.

There are many different ways to sort things, and different techniques have their own advantages and disadvantages.

## Objectives

- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms

## JavaScript Sort Method

JavaScript has a built-in sorting method for arrays. It's called `sort`.

- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b
  - If it returns 0, a and b are the same as far as the sort is concerned

```javascript
function numberCompare(num1, num2) {
  return num1 - num2
}

;[6, 4, 15, 10].sort(numberCompare) // [4, 6, 10, 15]
```

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top!

- Start looping from the end of the array towards the beginning with a variable called i
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array

```javascript
function bubbleSort(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}
```

Time Complexity: O(n^2)
Space Complexity: O(1)
