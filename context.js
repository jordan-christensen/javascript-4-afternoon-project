/* 
  Once you complete a problem, refresh ./context.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.

  Context is the value of the "this" keyword which is a reference to the object that "owns" the executing code
*/


////////// PROBLEM 1 //////////

/*
  Create an object called user which has the following properties.
  username --> which is a string
  email --> which is a string
  getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*
*/
  

//Code Here



////////// PROBLEM 2 //////////

/*
 Below we have the class Animal.  The eat method is using the "this" keyword.  Use the "new" keyword to assign context to "this", and save the instance to a variable named animal1.  You can pass anything you want in for name, species and food.
*/

class Animal {
  constructor(name, species, food) {
    this.name = name
    this.species = species
    this.food = food
  }

  eat() {
    return this.name + ' is a ' + this.species + ' and likes to eat ' + this.food;
  }
}

//Code Here



////////// PROBLEM 3 //////////

/*
  Use the bind method to assign context of the "this" keyword in the sayHi function to the user object; and save the bound function to a variable named whoSaysHi.  
*/

function sayHi(greeting) {
  return this.name + ' says ' + greeting
}

let who = {
  name: 'Scuba Steve',
  age: 35,
  location: 'Belize'
}

//Code Here



////////// PROBLEM 4 //////////

/*
  here we have a function that just returns the "this" keyword.  We will give context to "this", and your job is to tell us what the context is.
*/

function whatIsThis() {
  return this
}

// uncomment the line below and tell us what the context of "this" is for whatIsThis()
//let context1 = ???

let product = {
  name: 'snake plant',
  price: 45.32,
  description: 'Beautiful plant that can help filter the air inside your house.'
}

let func = whatIsThis.bind(product)

// uncomment the line below and tell us what the context of "this" is when we invoke func
//let context2 = ???

let vacation = {
  location: 'Hawaii',
  price: 3000,
  days: 7,
  nights: 6,
  whatIsThis: whatIsThis
}

// uncomment the line below and tell us what the context of "this" is when we invoke vacation.whatIsThis
//let context3 = ???


class Family {
  constructor(numParents, numKids, numPets) {
    this.numParents = numPets;
    this.numKids = numKids;
    this.numPets = numPets;
  }

  whatIsThis() {
    return this
  }
}

let family1 = new Family(2, 4, 1)

// uncomment the line below and tell us what the context of "this" is for the instance of Family created above.
//let context4 = ???