document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const resetBtn = document.getElementById("reset-btn");

  const watches = [
      {
          brand: "Rolex",
          model: "Submariner",
          movement: "Automatic",
          price: 10000,
          image: "/watches-imgs/submariner.png"
      },
      {
          brand: "Patek Philippe",
          model: "Nautilus",
          movement: "Automatic",
          price: 25000,
          image: "/watches-imgs/patek.jpg"
      },
      {
          brand: "Seiko",
          model: "Prospex",
          movement: "Quartz",
          price: 500,
          image: "/watches-imgs/seiko.png"
      },
      {
        brand: "Audemars Piguet",
        model: "Royal Oak",
        movement: "Automatic",
        price: 35000,
        image: "/watches-imgs/ap.png"
    },
    {
        brand: "Vacheron Constantin",
        model: "Oversea",
        movement: "Automatic",
        price: 100000,
        image: "/watches-imgs/vacheron.jpeg"
    }
  ];

  searchBtn.addEventListener("click", () => {
      const brand = document.getElementById("brand").value;
      const model = document.getElementById("model").value;
      const movement = document.getElementById("movement").value;
      const minPrice = document.getElementById("min-price").value;
      const maxPrice = document.getElementById("max-price").value;

      const filteredWatches = watches.filter(watch => {
          return (!brand || watch.brand === brand) &&
                 (!model || watch.model === model) &&
                 (!movement || watch.movement === movement) &&
                 (!minPrice || watch.price >= minPrice) &&
                 (!maxPrice || watch.price <= maxPrice);
      });

      displayResults(filteredWatches);
  });

  resetBtn.addEventListener("click", () => {
      document.getElementById("brand").value = "";
      document.getElementById("model").value = "";
      document.getElementById("movement").value = "";
      document.getElementById("min-price").value = "";
      document.getElementById("max-price").value = "";
      displayResults([]);
  });

  function displayResults(watches) {
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = watches.length
          ? watches.map(watch => `
              <div class="watch-card">
                  <img src="${watch.image}" alt="${watch.brand} ${watch.model}">
                  <p><strong>${watch.brand} ${watch.model}</strong></p>
                  <p>Price: $${watch.price}</p>
              </div>
          `).join("")
          : "<p>No watches found.</p>";
  }
});
