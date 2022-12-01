var elem = document.getElementById("username");
var displayusername = document.getElementById("displayusername");
function addval(e) {
    e.preventDefault(); // es se value gaib ni ho gi reload honey se rok raha hai form ke ander jb value inp krty submit krty hi data remove ho jata q ke reload ho jata hai to ye method use krty hai
    console.log(elem.value);
    displayusername.value = elem.value // console wala data set kr rahy hai displayusername me or eske inp me store ho ga 
}
