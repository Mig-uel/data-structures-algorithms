function capitalizedWords(words, result = []) {
  if (words.length < 1) return result

  result.push(words[0].toUpperCase())

  return capitalizedWords(words.slice(1), result)
}

console.log(capitalizedWords(['i', 'am', 'learning', 'recursion']))
