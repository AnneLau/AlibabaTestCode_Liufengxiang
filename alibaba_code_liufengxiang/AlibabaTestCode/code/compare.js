function compare(a, b) {
  let typeRsultA = JSON.stringify(Array.isArray(a) && Array.isArray(b) ? a.sort() : a);
  let typeRsultB = JSON.stringify(Array.isArray(a) && Array.isArray(b) ? b.sort() : b);
  return typeRsultA === typeRsultB;
}
export default compare;
