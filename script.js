/** Variables **/

var $submit = $("input[type=submit]");
var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10
var inputWidth = $("#inputWidth").attr("value", 10);

var colorPicker = $("input[type=color]");
var currentColor = colorPicker.val();

const reset = document.createElement("button");

reset.textContent = "Reset Grid";
reset.setAttribute('id', 'reset');

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

reset.addEventListener('click', resetGrid, false);

function addColor() {

    $(this).css("backgroundColor",currentColor);

    if (currentColor) {
        console.log("the color is " + currentColor);
    }
}

/** Event: Submit Grid Row and Column Length **/
$submit.on("click", function(evt){
    evt.preventDefault();
    makeGrid(inputHeight.val(), inputWidth.val());
});

$('#pixelCanvas').on('click', 'td', addColor);


function resetGrid() {
        reset.remove();
        $('#pixelCanvas').find('tr').remove();
}











