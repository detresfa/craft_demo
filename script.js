fetch("data/dataset1.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".row"); 

    data.parks.forEach(park => {
      console.log(park);
      if (!park.image) return; // Skip cards without images

      const cardWrapper = document.createElement("div");
      cardWrapper.classList.add("col-md-3", "col-sm-6", "col-12");

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="banner-text ${park.category.toLowerCase()}">${park.category}</div>
        <img src="${park.image}" alt="${park.title}">
        <h2>${park.title}</h2>
        <p>${park.body}</p>
        ${park.link ? `<a href="${park.link}" class="${park.category.toLowerCase()}">${park.linkText}</a>` : ""}
      `;

      cardWrapper.appendChild(card);
      container.appendChild(cardWrapper);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));