const container = document.getElementById('container');
const hover = document.getElementsByClassName('cell');
let rows;
let columns;

function createGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    for(i = 0; i < (rows * columns); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', function(){
            cell.classList.add('cell-black');
        });
        container.appendChild(cell);
    }
}

const reset = document.getElementById('reset');

createGrid(16, 16);

const remove = document.getElementsByClassName('cell');
let newSize = 0;

reset.addEventListener('click', function(){
    newSize = prompt('How many squares per side?', 'Between 0 and 100');
    do{
        if(newSize > 0 && newSize <= 100){
            break;
        }
        else if(newSize <= 0 || newSize > 100){
            newSize = prompt('The size must be greater than 0 and less than 100')
        }
    }
    while(newSize <= 0 || newSize > 100)
    
    while(remove.length > 0){
        remove[0].parentNode.removeChild(remove[0]);
    }

    createGrid(newSize, newSize);
});