document.addEventListener("DOMContentLoaded", () => {
    const paintingsData = JSON.parse(content); 
    // this line parses through the content variable which is supposed to contain JSON data representing the paintings
    // query selector selects different elements from the HTML
    const paintingsList = document.querySelector("#paintings ul"); // painting thumbnail ul
    const figure = document.querySelector("figure"); // the figure where selected painting and features will be showed
    const titleElement = document.querySelector("#title"); // title
    const artistElement = document.querySelector("#artist"); // artist
    const descriptionElement = document.querySelector("#description"); // description
    
    // Generate thumbnails
    paintingsData.forEach(painting => { // for each painting in paintingData
        const li = document.createElement("li"); // new <li>
        const img = document.createElement("img"); // create image for thumbnail
        img.src = `images/${painting.id}.jpg`; // Ensure correct path for thumbnails
        img.alt = painting.title; // alternate title
        li.appendChild(img); // appends li element with image
        li.dataset.id = painting.id; // Add the painting ID to dataset
        paintingsList.appendChild(li);
    });

    // Event delegation triggered with clicks on the thumbnail list
    paintingsList.addEventListener("click", event => {
        if (event.target.tagName === "IMG") { // checks if clicked element is image
            const paintingId = event.target.parentElement.dataset.id; // retrieves painting id
            figure.innerHTML = ""; // Clear previous content
            const selectedPainting = paintingsData.find(p => p.id === paintingId); // finds the selected painting
            const fullImage = document.createElement("img"); // Display selected painting details
            fullImage.src = `images/small/${selectedPainting.id}.jpg`; // Ensure correct path for full images
            figure.appendChild(fullImage);
            titleElement.textContent = selectedPainting.title;
            artistElement.textContent = selectedPainting.artist;
            // Draw rectangles for features
            selectedPainting.features.forEach(feature => {
                const box = document.createElement("div"); // new div element
                box.classList.add("box"); // box class
                const upperLeft = feature.upperLeft; // positioning
                const lowerRight = feature.lowerRight; // positioning
                // Set the position and dimensions
                box.style.position = "absolute";
                box.style.left = `${upperLeft[0]}px`;
                box.style.top = `${upperLeft[1]}px`;
                box.style.width = `${lowerRight[0] - upperLeft[0]}px`;
                box.style.height = `${lowerRight[1] - upperLeft[1]}px`;
                // Add mouseover and mouseout event handlers
                box.addEventListener("mouseover", () => {
                    descriptionElement.textContent = feature.description;
                });
                box.addEventListener("mouseout", () => {
                    descriptionElement.textContent = "";
                });
                figure.appendChild(box);
            });
        }
    });
});