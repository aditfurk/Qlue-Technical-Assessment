function converter(jsonString) {
  const data = JSON.parse(jsonString);
  const result = {
    h: Object.keys(data[0]),
    d: data.map((el) => Object.values(el)),
  };
  return JSON.stringify(result);
}

const input = `[{"username":"ali","hair_color":"brown","height":1.2},{"username":"marc","hair_color":"blue","height":1.4},{"username":"joe","hair_color":"brown","height":1.7},{"username":"zehua","hair_color":"black","height": 1.8}]`;

console.log(converter(input));
