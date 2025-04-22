document.getElementById("generate").addEventListener("click", function () {
  //alert('button click');
  const number = parseInt(document.getElementById("input-number").value);
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  if (isNaN(number)) {
    tableBody.innerHTML = `<tr><td class="text-red-500 p-2">Please enter a valid number.</td></tr>`;
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="border border-gray-300 p-2">${number}</td>
        <td class="border border-gray-300 p-2">x</td>
        <td class="border border-gray-300 p-2">${i}</td>
        <td class="border border-gray-300 p-2">=</td>
        <td class="border border-gray-300 p-2">${number * i}</td>
      `;
    tableBody.appendChild(row);
  }
});
