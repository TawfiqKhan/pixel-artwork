let table = document.getElementById('pixel_canvas');

// This is the function to save the value of the picked color and  that changes the color of the cell based on user click.

function fillColor() {
    let color = document.getElementById('colorPicker').value;
    this.style.background = color;
}

// This fucntion creates the table grid

function makeGrid(rows, cols) {
    // let table= document.getElementById('pixel_canvas');
    for (let row = 0; row < rows; row++) {
        let tr = table.insertRow();
        for (let col = 0; col < cols; col++) {
            let cl = tr.insertCell();
            cl.addEventListener('click', fillColor);
        }
    }
}

// This function resets the table when user submit the form again.
function resetGrid() {
    document.getElementById("pixel_canvas").innerHTML = "";
}

// This function saves the user input in variables  and then calls the makeGrid function to create the Table.

function saveData() {
    event.preventDefault();
    resetGrid();
    let height = document.getElementById('input_height').value;
    let width = document.getElementById('input_width').value;
    makeGrid(height, width);
}

document.getElementById('sizePicker').onsubmit = function() {
    saveData();
};