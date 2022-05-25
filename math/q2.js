var menu=[
    {"sunday": "Pizza"},
    {"monday": "meatballs"},
    {"tuesday": "Hamburger"},
    {"wednesday": "Italian Food"},
    {"thursday": "Steak & Grill"},
    {"friday": "Lobster mac & cheese"},
    {"Saturday": "Seafood tacos"}
];
function  displaymenu(){
    document.getElementById("menueachday").innerHTML = Object.values(menu[new Date().getDay()]).toString();
}
