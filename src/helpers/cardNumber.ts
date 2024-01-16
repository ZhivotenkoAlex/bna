export const getCardNumber = (number: string, isHide: boolean) => {
  const last4Digits = number.slice(-4)
  const first4Digits = number.slice(0, 4)

  const end = last4Digits.padStart(number.length / 2, '•')
  const start = first4Digits.padEnd(number.length / 2, '•')
  const maskingNumber = start + end

  const spacedMaskingNumber = maskingNumber
    .split('')
    .map((el, index) => (index % 4 === 0 ? ' ' + el : el))
    .join('')

  return isHide ? spacedMaskingNumber : number
}
