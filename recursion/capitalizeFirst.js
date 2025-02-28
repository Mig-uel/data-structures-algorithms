function capitalizeFirst(strings, result = []) {
  if (!strings.length) return result

  const firstWord = strings[0][0].toUpperCase()
  const capitalized = firstWord + strings[0].slice(1)

  result.push(capitalized)

  return capitalizeFirst(strings.slice(1), result)
}

console.log(capitalizeFirst(['car', 'taco', 'banana']))
