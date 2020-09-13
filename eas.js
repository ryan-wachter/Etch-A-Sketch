const container = document.getElementById('container');

function createGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for(i = 0; i < (rows * columns); i++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell'
    }
}

createGrid(16, 16);