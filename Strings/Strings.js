// let a = "3" + 5 + 6;
// console.log(a);

// let b = 3 + "5" + 6;
// console.log(b);

// let c = 3 + 5 + "6";
// console.log(c);

// let d = "Pneumonoultramicroscopicsilicovolcanoconiosis.";
// // console.log(d.length);
// console.log(d.toUpperCase());

// let e = "Pneumonoultramicroscopicsilicovolcanoconiosis.";
// console.log(d.toLowerCase());

let f =
  "I like this product; I hate this product; This product is worth buying; I don’t agree with the above user.";

// Que 7
// var quotes = f.split(";");
// for (let index = 0; index < quotes.length; index++) {
//   console.log(quotes[index]);
// }

// Que 8
function number(f) {
  var splitArray = f.split("");
  var count = 0;
  for (let index = 0; index < splitArray.length; index++) {
    if (splitArray[index] == "o") {
      count++;
    }
  }
  console.log("o count is  : " + count);
}
number(f);
