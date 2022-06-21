const container = document.getElementById("field");

var numFields = document.getElementById("numFields");  // the number of fields across
var output = document.getElementById("slideVal");      // the output fields
var blackButton = document.getElementById("black");
var rainButton = document.getElementById("rainbow");
var resetButton = document.getElementById("reset");
var max = 0;
var mode = 'black';
var size = 10;

output.innerHTML = numFields.value; // To keep track of proportions of graph

createFields(10, mode); // Default Creation


numFields.oninput = function() {
    output.innerHTML = this.value;
    size = this.value;
    container.setAttribute('style', `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`);
    createFields(size, mode);
}

blackButton.addEventListener("click", function(){
    mode = "black";
});

rainButton.addEventListener("click", function(){
    mode = "rainbow";
});

resetButton.addEventListener("click", function(){
    createFields(size, mode);
});

function createFields(size, mode) {

    container.innerHTML = "";

    for (var i = 1; i <= size * size; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.addEventListener("mouseover", colorSelect); 
        container.appendChild(content);
    }

}

function colorSelect (){
    switch (mode){
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        case 'black':
            this.style.backgroundColor = '#000000';
            break;
    }
}
