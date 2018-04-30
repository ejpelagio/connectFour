// Creating the Grid

class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS =7;
    this.selector = selector;
    this.createGrid();
    }

    createGrid(){
      // Creating a for loop to generate the rows needed
    const $board = $(this.selector);
          for (let row = 0; row < this.ROWS; row++) {
            // Creating a div using Jquery
            const $row = $('<div>')
            // Adding a class to the div we just created
            .addClass('row');
            // Creating a for loop to generate the cols needed
            for (let col = 0; col < this.COLS; col++) {
              // Creating a div using Jquery
              const $col = $('<div>')
              // Adding a class to the div we just created
              . addClass('col');
              // appending the row to the cols
              $row.append($col);
            }
            // appending the board to row
            $board.append($row);
          }
    }
}
