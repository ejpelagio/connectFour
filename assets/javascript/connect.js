// Creating the Grid

class Connect4 {
  constructor(selector) {
    this.ROWS = 6;
    this.COLS =7;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners()
    }

    createGrid(){
      // Creating a for loop to generate the rows needed
    const board = $(this.selector);
          for (let row = 0; row < this.ROWS; row++) {
            // Creating a div using Jquery
            const row = $('<div>')
            // Adding a class to the div we just created
            .addClass('row');
            // Creating a for loop to generate the cols needed
            for (let col = 0; col < this.COLS; col++) {
              // Creating a div using Jquery
              const $col = $('<div>')
              // Adding a class to the div we just created
              .addClass('col empty')
              .attr('data-col', col)
              .attr('data-row', row);
              // appending the row to the cols
              row.append($col);
            }
            // appending the board to row
            board.append(row);
          }
    }
    setupEventListeners(){
        const board = $(this.selector);

        function findLastEmptyCell(col){
          const cells = $(`.col[data-col='${col}']`);
          for (let i =cells.length - 1; i >= 0; i--) {
            const cell = $(cells[i]);
            if(cell.hasClass('empty')){
                return cell;
                console.log(cells);
            }

          }
          return null;

        }


    board.on('mouseenter', '.col.empty', function(){
      const col = $(this).data('col');
      // console.log('col');
      const lastEmptyCell = findLastEmptyCell(col);
      lastEmptyCell.addClass(`next-red`);
    })
    .on('mouseleave', '.col', function(){
      $('.col').removeClass(`next-red`);


    })

  }

}
