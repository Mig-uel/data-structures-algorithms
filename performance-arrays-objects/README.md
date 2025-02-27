# Analyzing Performance of Arrays and Objects

## Before We Begin

Let's spend a couple of minutes analyzing the things we do all the time in JavaScript: working with Arrays, Objects, and built-in methods.

## Objectives

- Understand how objects and arrays work, through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods

## Objects

Objects are unordered, key-value pairs.

## When To Use Objects

- When you don't need order
- When you need fast access/insertion and removal

## Big O of Objects

Insertion - O(1) (constant time)
Removal - O(1) (constant time)
Searching - O(n) (linear time)
Access - O(1) (constant time)

## Big O of Object Methods

Object.keys - O(n) (linear time)
Object.values - O(n) (linear time)
Object.entries - O(n) (linear time)
hasOwnProperty - O(1) (constant time)

## Arrays

Arrays are ordered lists.

## When To Use Arrays

- When you need order
- When you need fast access/insertion and removal (sort of...)

## Big O of Arrays

Insertion - It depends...
Removal - It depends...
Searching - O(n) (linear time)
Access - O(1) (constant time)

## Big O of Array Methods

push - O(1) (constant time)
pop - O(1) (constant time)
shift - O(n) (linear time)
unshift - O(n) (linear time)
concat - O(n) (linear time)
slice - O(n) (linear time)
splice - O(n) (linear time)
sort - O(n \* log n) (linearithmic time)
forEach/map/filter/reduce/etc. - O(n) (linear time)
