document.addEventListener("DOMContentLoaded", () => 
  
  {
  const bundleBoxes = document.querySelectorAll(".bundle-box");
  const totalDisplay = document.getElementById("total");

  function updateUI() {
    bundleBoxes.forEach(box => {
      const radio = box.querySelector("input[type='radio']");
      const options = box.querySelector(".options");
      const price = box.getAttribute("data-price");

      if (radio.checked) {
        totalDisplay.textContent = parseFloat(price).toFixed(2);
        box.classList.add("selected");
        if (options) {
          const itemCount = parseInt(options.getAttribute("data-items"));
          renderDropdowns(options, itemCount);
          options.style.display = "block";
        }
      } else {
        box.classList.remove("selected");
        if (options) options.style.display = "none";
      }
    });
  }

  function renderDropdowns(container, count) {
    container.innerHTML = ""; // Clear previous content
    for (let i = 1; i <= count; i++) {
      const group = document.createElement("div");
      group.className = "option-group";

      group.innerHTML = `
        <label>#${i} Size
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </label>
        <label>#${i} Colour
          <select>
            <option>Red</option>
            <option>Green</option>
            <option>Blue</option>
          </select>
        </label>
      `;

      container.appendChild(group);
    }
  }

  bundleBoxes.forEach(box => {
    box.querySelector("input[type='radio']").addEventListener("change", updateUI);
  });

  updateUI();

});
