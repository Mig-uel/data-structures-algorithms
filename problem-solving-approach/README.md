# Algorithms And Problem Solving Approach

## Objectives

- Define what an algorithm is
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer

## What is an Algorithm?

An algorithm is a process or set of steps to accomplish a certain task.

## Why Do I Need to Know This?

Almost everything that you do in programming involves some kind of algorithm. **It's the foundation for being a successful problem solver and developer.**
Also, it's a common topic in coding interviews.

## How Do You Improve?

1. Devise a plan for solving problems: How do you approach solving problems?
2. Master common problem solving patterns: What are the common patterns that you can use to solve problems?

## Problem Solving Strategies

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve/Simplify
5. Look Back and Refactor

## Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem.)
5. How should I label the important pieces of data that are a part of the problem?

Example:

_Write a function which takes two numbers and returns their sum._

1. Can I restate the problem in my own words?
   - "Implement addition"
2. What are the inputs that go into the problem?
   - Integers?
   - Floats?
   - What about string for large numbers?
3. What are the outputs that should come from the solution to the problem?
   - Int? Float? String?
4. Can the outputs be determined from the inputs?
   - Yes
5. How should I label the important pieces of data that are a part of the problem?
   - `num1`, `num2`, `sum`

## Explore Concrete Examples

- Coming up with examples can help you understand the problem better.
- Examples also provide sanity checks that your eventual solution works how it should.
  - User stories
  - Unit tests

## Explore Examples

- Start with simple examples
  - Write down the simplest possible input and output
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

Example:

_Write a function which takes in a string and returns counts of each character in the string._

1. Start with Simple Examples
   - `charCount("aaaa")` should return `{'a': 4}`
   - `charCount("hello")` should return `{'h': 1, 'e': 1, 'l': 2, 'o': 1}`
2. Progress to More Complex Examples
   - `charCount("my phone number is 182763")`
   - `charCount("Hello hi")`
3. Explore Examples with Empty Inputs
   - `charCount("")` should return `{}`
4. Explore Examples with Invalid Inputs
   - `charCount(123)` should return `Invalid input`

## Break It Down

- Explicitly write out the steps you need to take.
- This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

Example:

_Write a function which takes in a string and returns counts of each character in the string._

```js
function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters
}
```

```js
function charCount(str) {
  // make object to return at end
  //
  // loop over string, for each character
  // if the char is a number/letter AND in our object, add one to count
  // if the char is a number/letter AND not in our object, add it and set value to 1
  // if char is something else (space, period, etc.) don't do anything
  //
  // return object at end
}
```

e

## Solve/Simplify

Solve the problem if you can. If you can't, solve a simpler problem.

**Simplify**:

- FInd the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

Example:

_Write a function which takes in a string and returns counts of each character in the string._

```js
function charCount(str) {
  // make object to return at end
  const result = {}

  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()

    // if the char is a number/letter AND in our object, add one to count
    if (result[char]) {
      result[char]++
    } else {
      // if the char is a number/letter AND not in our object, add it and set value to 1
      result[char] = 1
    }
    // if char is something else (space, period, etc.) don't do anything
  }

  // return object at end
  return result
}
```

## Look Back and Refactor

Refactoring Questions:

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

Example:

_Write a function which takes in a string and returns counts of each character in the string._

```js
function isAlphanumeric(char) {
  return /[a-z0-9]/.test(char)
}

function charCount(str) {
  // make object to return at end
  const result = {}

  // loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    // if char is something else (space, period, etc.) don't do anything
    if (!isAlphanumeric(str[i])) continue

    const char = str[i].toLowerCase()

    // if the char is a number/letter AND in our object, add one to count
    if (result[char]) {
      result[char]++
    } else {
      // if the char is a number/letter AND not in our object, add it and set value to 1
      result[char] = 1
    }
  }

  // return object at end
  return result
}
```

**Refactor**:

```js
const isAlphanumeric = (char) => /[a-z0-9]/.test(char)

function charCount(str) {
  // make object to return at end
  const result = {}

  // loop over string, for each character
  for (let char of str) {
    // if char is something else (space, period, etc.) don't do anything
    if (!isAlphanumeric(char)) continue

    char = i.toLowerCase()

    // if the char is a number/letter AND in our object, add one to count
    if (result[char]) {
      result[char]++
    } else {
      // if the char is a number/letter AND not in our object, add it and set value to 1
      result[char] = 1
    }
  }

  // return object at end
  return result
}
```

## Recap

- Understand the problem
  - Ask questions to clarify the problem
- Explore concrete examples
  - Write examples down
  - Understand the problem better
- Break it down
  - Write out the steps you need to take
  - Layout the game plan
  - Know where you're going before you start
- Solve/Simplify
  - Solve the problem if you can
  - If you can't, solve a simpler problem
- Look back and refactor
  - Refactor your code
  - Look at other solutions
  - Optimize your code
