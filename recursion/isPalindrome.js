function isPalindrome(str) {
  console.log(str)

  if (str.length === 0 || str.length === 1) {
    return true
  }

  if (str[0] !== str[str.length - 1]) return false

  return isPalindrome(str.substr(1, str.length - 2))
}

console.log(isPalindrome('racecar'))
