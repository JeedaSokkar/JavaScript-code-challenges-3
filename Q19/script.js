function createTable() {
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row ${i + 1}, Col ${j + 1}`;
      cell.style.border = "1px solid black";
      cell.style.padding = "10px";
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  document.body.appendChild(table);
}

createTable();
