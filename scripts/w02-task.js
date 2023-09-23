/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Jared Lopez";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = "images/photoaboutme.jpeg";


/* Step 3 - Element Variables */
const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("foodElement");
const yearElement = document.querySelector ("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
let favoritesFood = ["Pizza", 'Lomo Saltado', 'Ice Cream', 'Queso Helado', 'Chocolate'];

foodElement.innerHTML = `${favoritesFood}`;

let newFavoriteFood = "Pollo Frito";
favoritesFood.push (newFavoriteFood);
foodElement.innerHTML += `<br>${favoritesFood}`;
favoritesFood.shift ();
foodElement.innerHTML += `<br>${favoritesFood}`;
favoritesFood.pop ();
foodElement.innerHTML += `<br>${favoritesFood}`;