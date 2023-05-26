const body = document.querySelector('body');
body.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;';

var grid = document.createElement('div');

body.appendChild(grid);

function etch_a_sketch(size){
    grid.remove();
    grid = document.createElement('div');
    grid.style.cssText = 'display: flex; flex-direction: column; height: 400px; width: 400px; border: 5px solid cyan; border-radius: 12px;';

    
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:center; align-items: stretch; flex: 1;';



        for(let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.style.cssText = 'flex: auto;'; 
            cell.addEventListener('mouseover', ()=>{
                cell.style.backgroundColor = 'black';
            });
            row.appendChild(cell);
        }

        grid.appendChild(row)
        
    }

    body.appendChild(grid);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    var size = prompt();
    if(size > 100){
        size = 100;
        alert("In nxn grid, n cannot be greater than 100.")
    }
    etch_a_sketch(size);
});



