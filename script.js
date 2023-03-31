const container = document.querySelector('#grid');

//We loop 16 times bc we want 16x16
for(let i = 0; i < 16; i++){
    //This will create each individual row
    const row = document.createElement('div');
    for(let i = 0; i < 16; i++){
        //Creates each row then add it to the grid
        var square = document.createElement('div');
        square.className = 'square'
        row.appendChild(square);
        container.appendChild(row);
    }

}


