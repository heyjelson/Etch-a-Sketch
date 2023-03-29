//access the HTML elements
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
let innerDefault;
function defaultGrid() {
    let gridBox = 400 / 16 - 2 + 'px';
    for(let i = 0; i < 256; i++) {
        innerDefault = document.createElement('div');
        innerDefault.style.cssText = `display: inline-block; height: ${gridBox}; width: ${gridBox}; border: 1px solid #0174a1`;
        innerDefault.addEventListener('mouseover', function() {this.style.background = 'black'});
        grid.appendChild(innerDefault);
    }
    
    disableBtn();
}

defaultBtn.addEventListener('click', defaultGrid);



//prompt, asking number to creates square grid box
let number;
let enteredNumber;
let innerCustom;
function popUp() {
    number = prompt("Enter number !> 100 to creates new grid square");
    enteredNumber = customBtn.value = number;
    if(enteredNumber > 100) {
        alert("Please enter number 100 or less than 100. Click ok then reset to continue.");
        enteredNumber = customBtn.value = '';
    }
    gridBox = 400 / enteredNumber - 2 + 'px'; 
    let rgb = ['red', 'green', 'blue'];
    for(let i = 0; i < enteredNumber * enteredNumber; i++) {
        innerCustom = document.createElement('div');
        innerCustom.style.cssText = `display: inline-block; height: ${gridBox}; width: ${gridBox}; border: 1px solid #0174a1`;
        innerCustom.addEventListener('mouseover', function() {this.style.background = rgb[Math.floor(Math.random() * rgb.length)]});
        grid.appendChild(innerCustom);
    }
    disableBtn();   
}

customBtn.addEventListener('click', popUp);


//reset functions
function resetGrid() {
    window.location.reload();
}

resetBtn.addEventListener('click', resetGrid);
