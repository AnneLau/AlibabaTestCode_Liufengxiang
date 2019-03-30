function getRate(rate, total) {
  let totalVal = total || 5
  if (rate <= 0 || rate > totalVal || totalVal < 0 || Math.floor(totalVal) !== totalVal) {
    return 'error'
  }
  let startNum = '☆'.repeat(totalVal)
  let rateNum = "★".repeat(rate)
  let starts = rateNum + startNum
  let start = starts.slice(0, totalVal)
  return start;
}
export default getRate;
