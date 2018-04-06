/** Variables **/

var createButton = $("button[name=create]");
var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10
var inputWidth = $("#inputWidth").attr("value", 10);

var colorPicker = $("input[type=color]");
var currentColor = colorPicker.val();


/** Properties **/
/** Methods **/

let gridCheck = false;




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




function addColor() {
    var colorPicker = $("input[type=color]");
    var currentColor = colorPicker.val();
    $(this).css("backgroundColor",currentColor);

    if (currentColor) {
        console.log("the color is " + currentColor);
    }
}

/** Event: Submit Grid Row and Column Length **/
createButton.on("click", function(evt){
    evt.preventDefault();
    console.log("works!")
    if ($("table") === gridCheck) {
        makeGrid(inputHeight.val(), inputWidth.val());

    } else {
        $("table").empty();
        makeGrid(inputHeight.val(), inputWidth.val());
        gridCheck = true;
        console.log("delete grid");
    }

});

$('#pixelCanvas').on('click', 'td', addColor);


// Check out https://trackingjs.com/docs.html#trackers for checking colors on grid for surprise









// function modifyColor() {
//     var tr = document.getElementById('tr');

// }




// function resetGrid() {}











// document.addEventListener("click", function(e) {
//     this === e.currentTarget;
//     console.log(this);
// });










