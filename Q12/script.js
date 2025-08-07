
function changeText() {
    const listItems = document.querySelectorAll("li");

    listItems.forEach(li => {
        if (li.textContent.trim() === "Item") {
            // Change the parent element's textContent
            li.parentElement.textContent = "Updated item 2";
        }
    });
}
changeText()