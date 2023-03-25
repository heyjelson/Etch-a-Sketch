const grid = document.querySelector('.grid_container');
const button = document.querySelector('.btn');

function defaultGrid() {
    let defaultGridBox = 400 / 16 - 2 + 'px';
    for(let i = 0; i < 256; i++) {
        const inner_grid = document.createElement('div');
        inner_grid.style.cssText = `display: inline-block; height: ${defaultGridBox}; width: ${defaultGridBox}; border: 1px solid #0174a1`;
        grid.appendChild(inner_grid);
    }
}

function popUp() {
    let number = prompt("Enter number !> 100 to creates new grid square");
    let enteredNumber = button.value = number;
    let gridBox = 400 / enteredNumber - 2 + 'px'; 
    console.log(gridBox);
    for(let i = 0; i < enteredNumber * enteredNumber; i++) {
        const inner_grid = document.createElement('div');
        inner_grid.style.cssText = `display: inline-block; height: ${gridBox}; width: ${gridBox}; border: 1px solid #0174a1; z-index: 10`;
        grid.appendChild(inner_grid);
    }
}

