let para =
  " Javascript notation %^&* notes that structure rules and not context for nothing";

// Question 10
// function number(para) {
//   let splitArray = para.split(" ");
//   let count = 0;
//   for (let index = 0; index < splitArray.length; index++) {
//     if (splitArray[index] == "not") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// number(para);

// Question 10b
console.log(para.split(" not "));
