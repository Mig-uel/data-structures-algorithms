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
