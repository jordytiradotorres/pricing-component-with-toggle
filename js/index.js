const inputCheckbox = document.querySelector(".plan__input");
const result = [...document.querySelectorAll(".pricing__total")];

inputCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    for (const r of result) {
      let dollar = parseFloat(r.textContent.slice(1));
      let outputAnnually = `<span class="dollar">$</span>${(
        dollar * 10
      ).toFixed(2)}</span>`;

      r.innerHTML = outputAnnually;
    }
  } else {
    result[0].innerHTML = `<span class="dollar">$</span>19.99</span>`;
    result[1].innerHTML = `<span class="dollar">$</span>24.99</span>`;
    result[2].innerHTML = `<span class="dollar">$</span>39.99</span>`;
  }
});
