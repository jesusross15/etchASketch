const grid = document.querySelector('.container');

let createGrid = function() {
for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider')
const gridSize = document.querySelector('.value');
slider.addEventListener('input', function() {
    let val = document.getElementById('slider').value;
    gridSize.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = 'black';
        })
        grid.appendChild(div); 
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = getRandomColor();
        })
    }
});


createGrid()

