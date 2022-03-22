function SwitchCase(age) {
  switch (parseInt(age)) {
    case 14:
      alert("Coupon 1");
      break;
    case 21:
      alert("Coupon 2");
      break;
    case 30:
      alert("Coupon 3");
      break;
    case 50:
      alert("Coupon 4");
      break;

    default:
      "No coupon";
  }
}
SwitchCase(prompt("age"));
