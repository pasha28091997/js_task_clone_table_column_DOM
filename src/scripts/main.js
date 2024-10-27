'use strict';

const table = document.querySelector('table');
const rows = table.querySelector('tr');

rows.forEach((row) => {
  const cells = row.querySelector('td, th');

  if (cells.length > 2) {
    const clonedCells = cells[1].cloneNode(true);

    row.inserBefore(clonedCells, cells[cells.length - 1]);
  }
});
