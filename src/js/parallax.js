function parallax() {
    const tableBtn = document.querySelector('.table-btn');
    const mainParallax = document.querySelector('.main-parallax');

    tableBtn.addEventListener('click', function() {
        const tableSrc = document.querySelector('table-img');

        const newDiv = document.createElement("div");
        newDiv.classList.add("fullScreen");

        const newImg = document.createElement("img");
        newImg.setAttribute("src", "images/cennik-serwis.png");

        const newButton = document.createElement("button");
        newButton.classList.add("btn");
        newButton.innerText = "Powrót";

        newDiv.appendChild(newImg);
        newDiv.appendChild(newButton);
        mainParallax.appendChild(newDiv);

        newButton.addEventListener("click", function() {
            newDiv.parentElement.removeChild(newDiv);
        });
    });
}

export {parallax}
