const arrayCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${arrayCategories.length}`);

arrayCategories.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// const ul = Array.from(document.querySelector('#categories').children);
// for (let elem of ul) {
//     let category = elem.firstElementChild.textContent;   
//     let quantityElem = elem.lastElementChild.children.length;
//   console.log(Category: ${category }\nElements: ${quantityElem });
// };


// const nameCategories = document.querySelector("#categories");
// const nameCategoriesItem = nameCategories.children;
// console.log(Number of categories: ${nameCategoriesItem.length});
// for (let i = 0; i < nameCategoriesItem.length; i += 1) {
//   console.log("Category:", nameCategoriesItem[i].firstElementChild.textContent);
//   console.log(
//     "Elements:",
//     nameCategoriesItem[i].lastElementChild.children.length
//   );
// }