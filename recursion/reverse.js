function reverse(str) {
  let newStr = ''

  if (!str.length) return ''

  newStr = str[str.length - 1]

  return newStr.concat(reverse(str.slice(0, str.length - 1)))
}

console.log(reverse('miguel'));