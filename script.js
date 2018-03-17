/** Variables **/

var submit = $("input[type=submit]");
var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10
var inputWidth = $("#inputWidth").attr("value", 10);

var colorPicker = $("input[type=color]");
var currentColor = colorPicker.val();

let table = document.querySelector('table');


// todo: better placement
const reset = document.createElement("button");
reset.textContent = "Reset Grid";
reset.setAttribute('id', 'reset');


/** Methods **/

function makeGrid(height, width) {
    for (let row = 0; row < height; row++) {
        let table = document.querySelector("#pixelCanvas");
        let tr = document.createElement("tr");
        for (let col = 0; col < width; col++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
        table.after(reset);
    }

}

function addColor(evt) {
    let defaultColor = document.querySelector("input[type=color]").value;
    evt.target.style.backgroundColor = defaultColor;

}

function resetGrid() {
        reset.remove();
        $('#pixelCanvas').find('tr').remove();
        makeGrid(inputHeight.val(), inputWidth.val());
        document.querySelector('td').addEventListener('click', addColor);
}


/** Event Listeners **/

// Creating Grid
submit.on("click", function(evt){
    evt.preventDefault();
    let designCanvas = document.querySelector('.module').previousElementSibling;
    let enforcer = document.createDocumentFragment();

    if (enforcer.textContent === "Action Unavailable") {
        enforcer.textContent = "";
        submit.disabled = "true";
    }
    else if (table.hasChildNodes() === true) {
        enforcer.textContent = "Action Unavailable";
        designCanvas.before(enforcer);
    } else {
        makeGrid(inputHeight.val(), inputWidth.val());
    }
});

// Adding color
$('table').on('click', "td", addColor);

// Resetting grid
reset.addEventListener('click', resetGrid, false);









