const restaurant = {
	name:"Gilang",
  	city:"Bandung",
  	"favorite drink":"Thaitea,Greentea",
  	"favorite food":"Seafood,Nugget",
  	"isVegan":true
}

const {name} = restaurant;

const {'favorite drink': favoriteDrink } = restaurant;

console.log(name)
console.log(favoriteDrink);