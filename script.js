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



createGrid()

