/**
 * Frequency Counter / Multiple Pointers
 */

function areThereDuplicates(...values) {
  if (!values.length) return false

  const lookup = {}

  for (let i in values) {
    lookup[values[i]] = lookup[values[i]] + 1 || 1
  }

  for (let i in lookup) {
    if (lookup[i] > 1) return true
  }

  return false
}
