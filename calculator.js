var display = document.getElementById("display");
function getvalue(a) {
     console.log(a);
    display.value += a; // es se agy value rkhta rahy ga 
}
function calculateval() {
    var a = eval(display.value); // evaluate js ka method hai calculation krdeta hai 
    console.log(a);
    display.value = a;
}
function clearAll() {
    display.value = "";
}