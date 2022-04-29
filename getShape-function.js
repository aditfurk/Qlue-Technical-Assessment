function getShape(num) {
  if (num % 2 === 0 && num % 3 === 0) return "CIRCLE STAR";
  if (num % 2 === 0) return "CIRCLE";
  if (num % 3 === 0) return "STAR";
  else return null;
}

console.log(getShape(5));
console.log(getShape(6));
console.log(getShape(9));
