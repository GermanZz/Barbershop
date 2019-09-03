var howToFindButton = document.querySelector(".js-button-map");

howToFindButton.addEventListener("click", function(evt){
    evt.preventDefault();
    map.classList.add("modal-show");
});