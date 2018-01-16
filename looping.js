var names = ["Hansel", "Greta", "Wicked Witch"]

console.log(names[0])
console.log(names[1])
console.log(names[2])

for(i = 0; i < names.length; i++; ) {
  console.log(names[i]);
}

var burgers = ["Bob", "Linda", "Tina", "Louise", "Gene"];
function printNames (array) {
  for(i = 0; i < array.length; i++) {
    console.log(burgers[i]);
  }
}

printNames(burgers);


while(condition) {
  // loop body
}

i = 0
while (i <= 10) {
  console.log(i)
  i++
}

[1, 2, 3].forEach(function(element) {
  console.log(element)
}
