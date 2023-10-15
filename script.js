const grid = document.querySelector('.container');

let createGrid = function() {
for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(div); 
}
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', function(){
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

createGrid()

