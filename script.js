const weights = document.querySelectorAll(".weight");
const grandTotalEl = document.getElementById("grandTotal");

weights.forEach(input => input.addEventListener("input", updateTotals));

function updateTotals() {
  let grandTotal = 0;
  weights.forEach(input => {
    const row = input.closest("tr");
    const price = Number(row.querySelector("td[data-price]").dataset.price);
    const total = price * Number(input.value);
    row.querySelector(".total").textContent = total.toFixed(2);
    grandTotal += total;
  });
  grandTotalEl.textContent = grandTotal.toFixed(2);
}
