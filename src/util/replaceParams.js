// @flow

// Source: https://stackoverflow.com/a/37949642/2094521
export function replaceParams (str, findArray, replaceArray) {
  let i
  let regex = []
  const map = {}
  for (i = 0; i < findArray.length; i++) {
    regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'))
    map[findArray[i]] = replaceArray[i]
  }
  regex = regex.join('|')
  str = str.replace(new RegExp(regex, 'g'), (matched) => {
    return map[matched]
  })
  return str
}
