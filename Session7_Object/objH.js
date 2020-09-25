// let person = {
//     name: `Nam`,
//     age: 18,
// };

// console.log(person);
// console.log(person.age);

// let prop = prompt("Enter property");
// console.log(person[prop]);

let list = {
    sport: `Basketball`,
    movie: `Doraemon`,
    food: `pho`,
};
// let prop = prompt(`What do you want to know?`);
// if ( typeof list[prop] == "undefined" || typeof list[prop] === "null") {
//     console.log(`the property's just been entered does not exist in our data.`)
// }
// else {
//     alert(list[prop].toUpperCase());
// }

let prop = prompt(`Enter a property`);

if (typeof list.prop == `null` || typeof list.prop == `undefined`) {
    alert(`Property does not exist, we will add it`);
    let content = prompt(`What is the content you want to add`);
    list[`prop`] = content;
    console.log(list);

}
