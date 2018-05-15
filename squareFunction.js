//Square Function
//User Prompt
rows = prompt("How many rows would you like to generate for your square?: ");

cols = prompt("How many columns would you like to generate for your square?: ");


//Create Square
function createSquare(width, height) {
    var square = "";
    var i, j;

    for (i = 0; i < width; i++) {    

        for (j = 0; j < height; j++) {
            square += "* ";
        }
        console.log(square);
        square = "";

    }
    return width, height;
}

createSquare(rows, cols);