// z=start number,w=end numbers

function PrintNumbers(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

function numbers(params) {
  if (params == 1) {
    PrintNumbers(1, 11);
  } else if (params == 2) {
    PrintNumbers(2, 12);
  } else if (params == 3) {
    PrintNumbers(3, 13);
  } else if (params == 4) {
    PrintNumbers(4, 14);
  } else if (params == 5) {
    PrintNumbers(5, 15);
  }
}
numbers(prompt("Enter the number from 1-5: "));
