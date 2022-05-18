const apply = document.getElementById('apply')
const size = document.getElementById('size')

window.addEventListener('load', function() {
    generateSquares();
  });

function generateSquares(size) {
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr);`)
    for (i = 1; i <= size; i++) {
        for (j = 1; j <= size; j++) {
            let square = document.createElement('square');
            container.appendChild(square);
            square.addEventListener('mouseover', function() {
            square.setAttribute("style", `background-color:blue; width:${960/size}, height:${960/size}`);
            console.log('hovering')})
        }
    }
}

apply.addEventListener('click', () => {
    generateSquares(size.value);
})
