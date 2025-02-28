/**
 * Frequency Counter
 */

function sameFrequency(a, b) {
  const str1 = a.toString()
  const str2 = b.toString()

  if (str1.length !== str2.length) return false

  const lookup = {}

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]

    lookup[char] = lookup[char] ? lookup[char] + 1 : 1
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i]

    if (!lookup[char]) {
      return false
    } else {
      lookup[char] - 1
    }
  }

  return true
}
