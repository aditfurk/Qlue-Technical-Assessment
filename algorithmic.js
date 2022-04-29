function generateCombination(arr, i, n) {
  if (n == 0 && arr.length > 1) console.log(arr.join(","));
  for (let j = i; j <= n; j++) {
    arr.push(j);
    generateCombination(arr, j, n - j);
    arr.pop();
  }
}

const n = 4;
generateCombination([], 1, n);
