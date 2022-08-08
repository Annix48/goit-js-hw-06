## Задание 1

В HTML есть список категорий `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

Напиши скрипт который:

1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть
   элементов `li.item`.
2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в
   консоль текст заголовка элемента (тега `<h2>`) и количество элементов в
   категории (всех вложенных в него `<li>`).

В результате, в консоли будут выведены такие сообщения.

```bash
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
```

## Задание 2

В HTML есть пустой список `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

В JavaScript есть массив строк.

```js
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Напиши скрипт, который для каждого элемента массива `ingredients`:

1. Создаст отдельный элемент `<li>`. Обзательно используй метод
   `document.createElement()`.
2. Добавит название ингредиента как его текстовое содержимое.
3. Добавит элементу класс `item`.
4. После чего вставит все `<li>` за одну операцию в список `ul.ingredients`.
