// Type
/* function greeter(person: string) {
  return `Hello ${person}`
}

const user = ['Darwin']

console.log(greeter(user)); */
// Interface
/* interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  console.log(`Hello ${person.firstName} ${person.lastName}`)
}

const user = {
  firstName: 'Charles',
  lastName: 'Darwin'
}

greeter(user) */
// Class
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(user) {
    console.log("Hello " + user.fullName);
}
var user = new User('Charles', 'Darwin');
greeter(user);
