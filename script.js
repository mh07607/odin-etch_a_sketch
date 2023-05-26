const body = document.querySelector('body');
body.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;';

var grid = document.createElement('div');

body.appendChild(grid);

function etch_a_sketch(size){
    grid.remove();
    grid = document.createElement('div');
    grid.style.cssText = 'display: flex; flex-direction: column; height: 500px; width: 500px;';

    
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:center; align-items: stretch; flex: 1;';



        for(let j = 0; j < size; j++){
            const cell = document.createElement('div');
            cell.style.cssText = 'border: 1px solid black; flex: auto;'; 
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
    etch_a_sketch(size);
});



