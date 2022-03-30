// z=start number,w=end numbers

function PrintNumbers(start) {
  var end = parseInt(start) + 11;

  for (let i = parseInt(start); i < end; i++) {
    console.log(i);
  }
}

PrintNumbers(prompt("Enter the number from: "));
