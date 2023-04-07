const container = document.querySelector('#grid');

var grid = document.createElement('div');
grid.className = 'gridoutline';

//button for grid size
var gridbtn = document.getElementById('gridsizebtn');
gridbtn.addEventListener('click', createGrid);

//Declare a grid on load page 
//Also helps so that if the user highlighted before making a grid the grid won't reset color
for(let i = 0; i < 10; i++){
    var row = document.createElement('div');
    row.className = 'row'
    for(let i = 0; i < 10; i++){
        var square = document.createElement('div');
        square.className = "square";
        row.appendChild(square);
        grid.appendChild(row);
    }
}
container.appendChild(grid);

//generates the grid based on the user input
function createGrid(){
    const sqrs = Array.from(document.getElementsByClassName('row'));

    //removes the previous div we created to create a new grid
    sqrs.forEach(i =>{
        i.remove('div');
    })

    var size = prompt("How big do you want your grid? (max size is 100)");

    while(size > 100){
        size = prompt("Please enter a value less than 100.");
    }
    for(let i = 0; i < size; i++){
        //This will create each individual row
        var row = document.createElement('div');
        row.className = 'row';
        for(let i = 0; i < size; i++){
            //Creates each row by adding squares then add it to the grid
            var square = document.createElement('div');
            square.className = "square";

            //adding each sqr to the row
            row.appendChild(square);
            
        }
        //adding each row to the grid 
        grid.appendChild(row);
    }
}

container.appendChild(grid);


var sqr = document.getElementsByClassName("gridoutline");

//When a sqr is being hovered over make it red
//evt refers to the sqr being hovered over on
function colorFunc(evt){
    //gets the current value of colors that allows the user to draw with this color
    evt.style.backgroundColor = document.getElementById('colors').value;
}

//We need to loop through to add eventlis to all the squares
for(var i = 0; i < sqr.length; i++){
    sqr[i].addEventListener('mouseover', function(e){
        //add it so that you can hold mouse down and drag for color
        //1 means the button is being clicked on
        if(e.buttons == 1){
            colorFunc(e.target);
        }
    });
    
}
