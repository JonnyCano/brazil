/* use javascript to dynamically generate another villain to add to this list */


var listEl = document.querySelector("#villains");

var villainListEl = document.querySelector(".list-group-item li");

villainListEl.textContent ="The Red Queen";

villainListEl.className ="list-group-item";

listEl.appendChild(villainListEl);