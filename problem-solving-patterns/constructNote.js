/**
 * Frequency Counter
 */

function constructNote(message, letters) {
  if (!message) return true
  if (!letters) return false

  let lookup = {}

  for (let char of letters) {
    lookup[char] = ++lookup[char] || 1
    // lookup[char] = lookup[char] + 1 || 1
  }

  console.log(lookup)

  for (let char of message) {
    if (!lookup[char]) return false

    lookup[char] - 1
  }

  return true
}

console.log(constructNote('ab', 'aabcc'))
