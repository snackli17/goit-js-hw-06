
const listCategories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${listCategories.length}`);
const categoriesArray = [...listCategories]
    .forEach(categories => {
        console.log(`Category: ${categories.firstElementChild.textContent}`);
        console.log(`Elements: ${categories.lastElementChild.children.length}`);
    });





