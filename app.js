/** Variables **/

var $submit = $("input[type=submit]");
var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10
var inputWidth = $("#inputWidth").attr("value", 10);




/** Properties **/




/** Methods **/

function makeGrid(height, width) {

    for (var row = 0; row < height; row++) {
        // create row
        var table = $("#pixelCanvas"); // #pixelCanvas
        var tr = document.createElement("tr");
        for (var col = 0; col < width; col++) {
            var td = document.createElement("td");
            // $(td).addClass("fill");
            $(tr).append(td); // 10 times
        }
        $(table).append(tr);
    }
}



function addColor() {}

function removeColor() {}

function resetGrid() {}



/** Event Handlers **/

$submit.on("click", function(evt){
    evt.preventDefault();
    makeGrid(inputHeight.val(), inputWidth.val());
});


$('#pixelCanvas').on('click', 'td', function() {
    var colorPicker = $("input[type=color]");
    var currentColor = colorPicker.val();
    $(this).css("backgroundColor",currentColor);

    if (currentColor) {
        console.log("the color is " + currentColor);
    }

});




