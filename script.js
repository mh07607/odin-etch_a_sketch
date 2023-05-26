
const body = document.querySelector('body');
const grid = document.createElement('div');
body.style.cssText = 'display: flex; justify-content: center; align-items: center;';
grid.style.cssText = 'display: flex; flex-direction: column;'

for(let i = 0; i < 16; i++){
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; height: 50px; width: 800px';


    for(let j = 0; j < 16; j++){
        const cell = document.createElement('div');
        cell.style.cssText = 'height: 48px; width: 48px; border: 2px solid black';
        cell.addEventListener('hover')
        row.appendChild(cell);
    }

    grid.appendChild(row)
    
}

body.appendChild(grid);


