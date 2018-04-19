export const handlePositive = (start, end, step) => {
  let arr = []
  let index = 0

  if (end < start) {
    for (let i = start; i > end; i += step) {
      arr[index] = i
      index++
    }
    return arr
  }

  const init = end ? start : 0
  const len = end || start
  for (let i = init; i < len; i += step) {
    arr[index] = i
    index++
  }
  return arr
}
