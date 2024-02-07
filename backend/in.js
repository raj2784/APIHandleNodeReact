var data = [
  { id: "123", color: "Red", model: "Tesla" },
  { id: "124", color: "Black", model: "Honda" },
  { id: "125", color: "Red", model: "Audi" },
  { id: "126", color: "Blue", model: "Tesla" },
];

var keys = ["color", "model"];
var values = ["Tesla", "Audi", "Red"];

var result = data.filter(function (e) {
  return keys.every(function (a) {
    return values.includes(e[a]);
  });
});
