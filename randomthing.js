var things = [["TREES", "pexels-pixabay-53435.jpg"],["BOEING 747","B-747_Iberia.jpg"], ["HOPE","finding+hope.jpg"]]

//select random thing
function randomThing(){
    let index = Math.floor(Math.random() * things.length);
    return things[index];
}

//update item
function updatePage(){ 
    let item = randomThing(things);
    document.getElementById("label").innerHTML = item[0]; 
    let img = document.getElementById("image")
    img.src = item[1]
}

