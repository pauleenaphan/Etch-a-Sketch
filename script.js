const container = document.querySelector('#grid');

var gridbtn = document.getElementById('gridsizebtn');

gridbtn.addEventListener('click', createGrid);

function createGrid(){
    var size = prompt("How big do you want your grid? (max size is 100)");
    for(let i = 0; i < size; i++){
        //This will create each individual row
        var row = document.createElement('div');
        row.className = 'row';
        for(let i = 0; i < size; i++){
            //Creates each row then add it to the grid
            var square = document.createElement('div');
            //square.setAttribute('id', 'square');
            square.className = "square";
            row.appendChild(square);
            container.appendChild(row);
        }
    }
}

/*
//We loop 16 times bc we want 16x16
for(let i = 0; i < 16; i++){
    //This will create each individual row
    var row = document.createElement('div');
    row.className = 'row';
    for(let i = 0; i < 16; i++){
        //Creates each row then add it to the grid
        var square = document.createElement('div');
        //square.setAttribute('id', 'square');
        square.className = "square";
        row.appendChild(square);
        container.appendChild(row);
    }

}
*/
var sqr = document.getElementsByClassName("square");

//When a sqr is being hovered over make it red
//evt refers to the sqr being hovered over on
function colorFunc(evt){
    evt.target.style.backgroundColor = "red";
}

//We need to loop through to add eventlis to all the squares
for(var i = 0; i < sqr.length; i++){
    sqr[i].addEventListener('mouseover', colorFunc);
}

