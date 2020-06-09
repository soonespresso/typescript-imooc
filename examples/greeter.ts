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
class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

function greeter(user: User) {
  console.log(`Hello ${user.fullName}`)
}

const user = new User('Charles', 'Darwin')
greeter(user)