function withdraw(amount) {
  if (isNaN(amount)) {
    alert("Please enter valid number");
  } else {
    if (amount == 20) {
      alert("Your amount is ready");
    } else {
      alert("Please enter multiples of 20");
    }
  }
}

withdraw(prompt("Please enter Amount"));
