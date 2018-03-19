/* Todo: Add better create and reset functionality (flowchart it) */
/* Extra: Responsive for Mobile */
/* Extra: Better design: fun, playful background */



/** Variables **/

var submit = document.querySelector('#create');
submit.value = "create";
// var inputHeight = $("#inputHeight").attr("value", 10); // inital height, width = 10

var inputHeight = document.querySelector('#inputHeight'); // inital height, width = 10
// var inputWidth = $("#inputWidth").attr("value", 10);
var inputWidth = document.querySelector('#inputWidth');

// var colorPicker = $("input[type=color]");
// var colorPicker = document.querySelector('input[type=color]');
var colorPicker = document.querySelector('#colorPicker');
var currentColor = colorPicker.value;

let table = document.querySelector('table');


// todo: better placement
// const reset = document.createElement("button");
// reset.textContent = "Reset Grid";
// reset.setAttribute('id', 'reset');

const reset = document.querySelector('#reset');
reset.value = "reset"


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
        table.after(reset); // short-circuits "create button" functionality


    }
    submit.classList.remove('visible');
    submit.classList.add('hidden');


    reset.classList.add('visible');


}

function addColor(evt) {
    let defaultColor = document.querySelector("input[type=color]").value;
    evt.target.style.backgroundColor = defaultColor;

}

function resetGrid() {
        // reset.remove();

        submit.classList.remove('hidden');
        submit.classList.add('visible');

        $('#pixelCanvas').find('tr').remove();
        makeGrid(inputHeight.value, inputWidth.value);

        document.querySelector('td').addEventListener('click', addColor);

        // submit.disabled = false; // find best placement
}


/** Event Listeners **/

// Creating Grid
submit.addEventListener("click", function(evt){
    evt.preventDefault();
    let designCanvas = document.querySelector('.module').previousElementSibling;
    // let enforcer = document.createDocumentFragment();
    // let enforcer = document.createElement('div');

    // Todo: Remove documentFragment if true (Funcationality disabled)

    // vanilla js for input[submit]

    // fix: re-enable input[submit] after grid reset and fix enforcer

    // if (enforcer) {
    //     // setting the value of the disabled attribute to the empty string (""), we are setting disabled to true
    //     submit.setAttribute("disabled", "");
    //     // console.log("enforcer active");
    // }



    // else if (table.hasChildNodes() === true) {
    //     enforcer.textContent = "Action Unavailable";
    //     designCanvas.before(enforcer);
    // }

    makeGrid(inputHeight.value, inputWidth.value);

});

// Adding color
$('table').on('click', "td", addColor);

// Resetting grid
reset.addEventListener('click', resetGrid, false);


// Possible Button Function Fix: Toggle input for Reset and "Submit" (rename to "Create")






