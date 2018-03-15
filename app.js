

/***** IMPORTANT TODO: Consolidate local and copeden work *****/

                         /* TODO: Push all work to GitHub */


/* VARIABLE ASSIGNMENT */

var $submit = $("input[type=submit]");
var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10
var inputWidth = $("#inputWidth").attr("value", 10);




/* FUNCTION: MAKE GRID! */

/** DONE: add input value functionality **/

$submit.on("click", function(evt){
    evt.preventDefault();
    makeGrid(inputHeight.val(), inputWidth.val());
});

/* FUNCTION: Make a grid! */
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


/***** IMPORTANT TODO: Consolidate local and copeden work *****/

                         /* TODO: Push all work to GitHub */



/* FUNCTION: Pick a color! */

/** TODO: Build colorPicker functionality
1) Select Color
2) Assign Selected Color to currentColor
3) Test: console.log(current color)

Fixed: Able to set color for table, not for td. Why?
REFERENCE:
  http://api.jquery.com/on/
  => ".on( events [, selector ] [, data ], handler )"

**/

/** TODO: Create function for colorPicker
TODO: Fix for "submit" appending additonal grids
TODO: V2: Feature to reset grid
TODO: V2: Mobile-compliance for colorPicker
TODO: V2: Feature for removing color

**/


$('#pixelCanvas').on('click', 'td', function() {
    var colorPicker = $("input[type=color]");
    var currentColor = colorPicker.val();
    $(this).css("backgroundColor",currentColor);

});


/***** IMPORTANT TODO: Consolidate local and copeden work *****/

                         /* TODO: Push all work to GitHub */





