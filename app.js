function divise(j) {
  let c = 0;

  for (let i = 1; i <= num; i++) {
    if (num % 3 == 0) {
      c += 1;
    }
  }
  return c;
}

function countNumbers(n) {
  let c = 0;

  for (let i = 1; i <= n; i++) {
    if (divise(i) == 3) c += 1;
  }
  return c;
}
