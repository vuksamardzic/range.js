import { checkIfNegative } from './helpers/checkIfNegative'
import { handleNegative } from './helpers/handleNegative'
import { handlePositive } from './helpers/handlePositive'

export const generate = (start, end, step = 1) => {
  if (checkIfNegative(start)) {
    return handleNegative(start, end, step)
  } else {
    return handlePositive(start, end, step)
  }
}
