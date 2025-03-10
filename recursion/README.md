# Recursion

## Objectives

- Define what recursion is and how it can be used
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

## What Is Recursion?

A process (a function in our case) that calls itself

## Why Use Recursion?

Recursion is used everywhere!

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

## The Call Stack

In almost all program languages, there is a built in data structure that manages what happens when functions are invoked. It's named the "call stack".

- It's a stack data structure - we'll talk about that later!
- Any time a function is invoked it is placed (pushed) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

## Why Do I Care?

- You're used to functions being pushed on the call stack and popped off when they are done
- When we write recursive functions, we keep pushing new functions onto the call stack!

## How Recursive Functions Work

Recursion functions invoke the same function with a different input until you reach your base case!

## Base Case

The condition when the recursion ends. **This is the most important concept to understand**

## Two Essential Parts of a Recursive Function

**Base Case**

- the condition when the recursion ends

**Different Input**

- the input to the recursive function must be different in some way

## Our First Recursive Function

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log('All done!')
    return
  }

  console.log(num)
  num--
  countDown(num)
}
```

## Our Second Recursive Function

```javascript
function sumRange(num) {
  if (num === 1) return 1

  return num + sumRange(num - 1)
}
```

## Writing Factorial Iteratively

```javascript
function factorial(num) {
  let total = 1

  for (let i = num; i > 0; i--) {
    total *= i
  }

  return total
}
```

## Writing Factorial Recursively

```javascript
function factorial(num) {
  if (num === 1) return 1

  return num * factorial(num - 1)
}
```

## Common Recursion Pitfalls

- No base case or base case is wrong
- Forgetting to return or returning the wrong thing
- Stack overflow!

## Helper Method Recursion

### Helper Method Pattern

```javascript
function outer(input) {
  const outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)
  return outerScopedVariable
}
```

It's a pattern where we have an outer function that's not recursive and a recursive inner function that does the work.

**Implementation**:

```javascript
function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}
```

## Pure Recursion

**Tips for Pure Recursion**:

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

**Implementation**:

```javascript
function collectOddValues(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] & (2 !== 0)) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)))

  return newArr
}
```
