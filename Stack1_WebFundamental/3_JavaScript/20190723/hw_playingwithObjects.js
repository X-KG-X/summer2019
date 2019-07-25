var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
console.log(users);

//1. How would you print/log John's age?
console.log(users[1].age);
function getAgeOfUser(username) {
	for (var user of users) {
		if (user.name === username) {
			// console.log("age : " + user.age);
			return (user.age);
		}
	}
	return null;
}
console.log(getAgeOfUser("John"));
console.log(getAgeOfUser("Michael"));
console.log(getAgeOfUser("EE"));

//2.How would you print/log the name of the first object?
console.log("first user's name: " + users[0].name);

//3.How would you print/log the name and age of each user using a for loop?  Your output should look something like this
for (var user of users) {
	console.log(user.name + " - " + user.age);
}