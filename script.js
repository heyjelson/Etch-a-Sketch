//access the HTML element
const grid = document.querySelector('.grid_container');
const defaultBtn = document.querySelector('.default');
const customBtn = document.querySelector('.custom');
const resetBtn = document.querySelector('.reset');

//disable buttons
function disableBtn() {
    defaultBtn.disabled = true;
    customBtn.disabled = true;
}

//default square grid box
function defaultGrid() {
    let gridBox = 400 / 16 - 2 + 'px';
    for(let i = 0; i < 256; i++) {
        const inner_grid = document.createElement('div');
        inner_grid.style.cssText = `display: inline-block; height: ${gridBox}; width: ${gridBox}; border: 1px solid #0174a1`;
        grid.appendChild(inner_grid);
    }
    disableBtn();
}

//prompt, asking number to creates square grid box
function popUp() {
    let number = prompt("Enter number !> 100 to creates new grid square");
    let enteredNumber = customBtn.value = number;
    gridBox = 400 / enteredNumber - 2 + 'px'; 
    for(let i = 0; i < enteredNumber * enteredNumber; i++) {
        const inner_grid = document.createElement('div');
        inner_grid.style.cssText = `display: inline-block; height: ${gridBox}; width: ${gridBox}; border: 1px solid #0174a1`;
        grid.appendChild(inner_grid);
    }
    disableBtn();
}

//reset functions
function resetGrid() {
    window.location.reload();
}

//events
defaultBtn.addEventListener('click', defaultGrid)
customBtn.addEventListener('click', popUp);
resetBtn.addEventListener('click', resetGrid);




