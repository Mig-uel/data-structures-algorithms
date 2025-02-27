# Big-O

## Objectives

- Motivate the need for something like Big-O Notation
- Describe what Big-O Notation is
- Simplify Big-O expressions
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big-O Notation
- Describe what a logarithm is

## What is the idea here?

Imagine we have multiple solutions to the same problem. How can we determine which one is the best?
Big-O is a system that allows us to compare the efficiency of these solutions.

Example:

_Write a function that accepts a string input and returns a reversed copy._

Solution 1:

```javascript
function reverse(str) {
  return str.split('').reverse().join('')
}
```

Solution 2:

```javascript
function reverse(str) {
  let reversed = ''
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}
```

Wouldn't it be nice to have a system for classifying or comparing these solutions?

## Who Cares?

Because not all solutions are created equal. If you have a solution that takes 10 seconds and another that takes 10 years, you'd want to know that, right?

- It is important to have a precise vocabulary to talk about how our code performs.
- Useful for discussing trade-offs between different approaches.
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.
- It comes up in interviews.

## Timing Our Code

Example:

_Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n._

Solution 1:

```javascript
function addUpTo(n) {
  let total = 0

  for (let i = 1; i <= n; i++) {
    total += i
  }

  return total
}
```

Solution 2:

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2
}
```

## Which one is better? What does better mean?

- Faster?
- Less memory-intensive?
- More readable?

How would we determine and label these differences?

## The Problem with Time

- Different machines will record different times.
- The same machine will record different times.
- For fast algorithms, speed measurements may not be precise enough.

## If Not Time, Then What?

Rather than counting seconds, which are so variable, we can count the number of simple operations the computer has to perform, which remains constant from machine to machine.

The time will always be determined by the number of operations the computer has to perform.

## Counting Operations

Example:

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2
}
```

- 3 operations regardless of the size of n.
- Multiplication, addition, and division.

Example:

```javascript
function addUpTo(n) {
  let total = 0

  for (let i = 1; i <= n; i++) {
    total += i
  }

  return total
}
```

- n additions and n assignments.
- The number of operations grows roughly proportionally with n.

## Counting is Hard!

Depending on what we count, the number of operations can be as low as _2n_ or as high as _5n + 2_.

But regardless of the exact number, the number of operations grows roughly proportionally with n.

"As n grows, the number of operations grows roughly proportionally with n."

## Introducing Big-O

Big-O Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. It's a way of describing the relationship between the input to a function and how it changes the runtime of that function.

We don't care about the details, only the broad trends.

## Big-O Definition

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

(as n scales, the runtime scales relative to n)

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

When we are talking about Big-O, we are talking about the worst-case scenario. We are talking about the upper bound of the runtime.

**Upper Bound**:

- The worst-case scenario.
- It an algorithm is O(n), it means that the runtime grows linearly with the input size and it won't be worse than that.
- If it's O(n^2), it means that the runtime grows quadratically with the input size and it won't be worse than that.
- Think of the upper bound as a ceiling for runtime growth.

**Worse-Case Scenario**:

When we say worse-case scenario, we're talking about the most expensive or slowest performance the algorithm could possibly have, given any input. This happens when the input to the algorithm is arranged in the least favorable way for the algorithm to execute efficiently.

In a linear search, if you are searching for an element in an array of size n, the worse-case scenario is when the element is at the very end of the array or not in the array at all. The algorithm would have to iterate through the entire array, checking all n elements, so the runtime would be O(n).

For a sorting algorithm like Quick Sort, the worse-case scenario happens when the pivot selection is consistently poor (e.g. picking the smallest or largest element in a sorted or reverse-sorted array). This would result in a runtime of O(n^2), even though the average case is much better at O(n log n).

Upper bound is a guarantee that the algorithm will not perform worse than the stated Big-O.
Worst-case scenario is a specific situation where the algorithm performs at its worst, which may or may not be the upper bound.

## Simplifying Big-O Expressions

When determining the time complexity of an algorithm, there are some helpful rules of thumb for Big-O expressions. There rules are consequences of the definition of Big-O:

- Constants don't matter:
  - O(2n) is O(n)
  - O(500) is O(1)
  - O(13n^2) is O(n^2)
- Smaller terms don't matter:
  - O(n + 10) is O(n)
  - O(1000n + 50) is O(n)
  - O(n^2 + 5n + 8) is O(n^2)

## Big-O Shorthands

Analyzing complexity with Big-O can get complicated but there are some rules of thumb that can help. There rules won't always work but are a helpful starting point:

1. Arithmetic operations are constant (subtracting, diving, multiplying, adding)
2. Variable assignment is constant (let x = 5)
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Space Complexity

So far, we've been focusing on **time complexity**: how can we analyze the runtime of an algorithm as the size of the inputs increases?

We can also use Big-O notation to analyze **space complexity**: how much additional memory do we need to allocate in order to run the code in our algorithm?

## What About The Inputs?

Sometimes you'll hear the term "auxiliary space complexity" to refer to the space required by the algorithm, not including space taken up by the inputs.

We only care about the space taken up by the algorithm itself and not the space taken up by the inputs.

## Space Complexity in JS

Rules of thumb:

- Most primitives (booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (where n is the string length).
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

Example 1:

```javascript
function sum(arr) {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }

  return total
}
```

The space complexity of this function is O(1) because the only additional space we are using is the variable `total`. Remember, most primitives (like numbers) are constant space.

Example 2:

```javascript
function double(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }

  return newArr
}
```

The space complexity of this function is O(n) because the size of the `newArr` array scales with the size of the input `arr`. The larger the input, the more space we need.

## Logarithms

We've encountered some of the most common complexities: O(1), O(n), O(n^2). Sometimes Big-O expressions involve more complex mathematical expressions. One of the most common is the logarithm.

## What is a Logarithm?

A logarithm is the inverse of exponentiation. Just like division and multiplication are inverse operations, logarithms and exponentiation are inverse operations.

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to 1.

- log2(8) = 3 because 2^3 = 8
- log2(value) = exponent => 2^exponent = value

Most of the time, we don't care about the base of the logarithm. When we talk about Big-O, we are usually talking about the base-2 logarithm: log2.

Rule of thumb: the logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to 1**.

## Logarithmic Time Complexity

Logarithmic time complexity is great! It's the best time complexity after constant time complexity. It's even better than linear time complexity.

## Who Cares?

- Certain searching algorithms have logarithmic time complexity.
- Efficient sorting algorithms involve logarithms.
- Recursion sometimes involves logarithmic space complexity.

## Recap

- To analyze the performance of an algorithm, we use Big-O Notation.
- Big-O Notation can give us a high-level understanding of the time or space complexity of an algorithm.
- Big-O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?).
- The time or space complexity (as measured by Big-O) depends only on the algorithm, not the hardware used to run the algorithm.
- Big-O Notation is everywhere, so get used to it!
