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
