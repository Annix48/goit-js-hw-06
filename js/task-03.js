const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector("ul");
const element = images
  .map(function ({ url, alt }) {
    return `<li><img src = '${url}' alt = '${alt}' width="320"></li>`;
  })
  .join("");
galleryListEl.insertAdjacentHTML("afterbegin", element);



/* Return to DOM 3 times.
// for (let el of images)
//   document
//     .querySelector(".gallery")
//     .insertAdjacentHTML(
//       "beforeEnd",
//       `<li><img src="${el.url}" alt="${el.alt}"></li>`
//     );

// const ulEl = document.querySelector(".gallery");
// images.forEach(el => {
//   ulEl.insertAdjacentHTML(
//     'beforeEnd',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  /></li>`,
//   );
// });