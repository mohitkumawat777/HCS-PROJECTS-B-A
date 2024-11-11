let none;
let ntwo;
let total;
none =Number(none);
ntwo = Number(ntwo);

//total answer
document.getElementById("equal").onclick = function()
{
    document.getElementById("caltotin").textContent= total;
}

// divide
document.getElementById("div").onclick = function()
{
document.getElementById("assign").textContent = "/";
none = document.getElementById("no1").value;
ntwo = document.getElementById("no2").value;
total=none/ntwo;
console.log(total);
}

//multiply
document.getElementById("multi").onclick = function()
{
document.getElementById("assign").textContent = "x";
none = document.getElementById("no1").value;
ntwo = document.getElementById("no2").value;
total=none*ntwo;
console.log(total);
}

//addition
document.getElementById("add").onclick = function()
{
document.getElementById("assign").textContent = "+";
none = document.getElementById("no1").value;
ntwo = document.getElementById("no2").value;
none =Number(none);
ntwo = Number(ntwo);
total=none+ntwo;
console.log(total);
}

//subtraction
document.getElementById("sub").onclick = function()
{
document.getElementById("assign").textContent = "-";
none = document.getElementById("no1").value;
ntwo = document.getElementById("no2").value;
total=none-ntwo;
console.log(total);
}