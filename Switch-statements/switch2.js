function switchcase(day) {
  switch (day) {
    case "monday":
      alert("Mondays,We serve Pasta");
      break;
    case "tuesday":
      alert("tuesday,We serve Pasta");
      break;
    case "wednesday":
      alert("wednesdays,We serve Pasta");
      break;
    case "thursday":
      alert("thursdays,We serve Sphagetti,meatballs");
      break;
    case "friday":
      alert("Fridays, we serve Tacos");
      break;
    case "saturday":
      alert("saturdays,We serve Pasta");
      break;
    case "sunday":
      alert("sundays,We serve Pasta");
  }
}

switchcase(prompt("Enter day"));
