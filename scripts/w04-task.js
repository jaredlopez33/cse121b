/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jared Lopez",
    Photo: "images/photoaboutme.jpeg",
    favoriteFoods: ['Pizza', 'Lomo Saltado', 'Ice Cream', 'Queso Helado', 'Chocolate'],
    hobbies: ["Basketball","Cooking","Painting","Playing the piano"],
    placesLived: ["Arequipa","Maryland"]
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Arequipa, PER", 
        length1: "18 Years",
    },
    {
        place: "Maryland, MD",
        length1: "1 Years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.Photo
document.querySelector("#photo").alt = myProfile.name

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;

    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length1;

    document.querySelector("#places-lived").appendChild(dd);
    
});
