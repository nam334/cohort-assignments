//  {
//       key: "id",
//       label: "ID",
//       sortable: true,
//       filterable: false,
//     },
export const sortColumn = (key, sortable, tableRows) => {
  if (!sortable) return;
  //asc - small to big
  for (let i = 0; i < tableRows.length; i++) {
    let temp = tableRows[i][key];
    for (let j = i + 1; j < tableRows.length; j++) {
      if (tableRows[i][key] < tableRows[i + 1][key]) {
        tableRows[i + 1][key] = tableRows[i][key];
        tableRows[i][key] = temp;
      }
    }
  }
};
