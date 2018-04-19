export const handleNegative = (start, end, step) => {
  let arr = []
  let index = 0

  if (end < start) {
    for (let i = start; i > end; i += step) {
      arr[index] = i
      index++
    }
    return arr
  }

  const len = end || 0
  for (let i = start; i < len; i += step) {
    arr[index] = i
    index++
  }
  return arr
}
