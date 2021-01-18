# All Aboard!

Thanks for dropping by dock. [Hop aboard](https://ironmongrrrl.github.io/cruise-ships), list the ports you’d like to cruise to and away we’ll go! 

## Overview of the Project

This was one of the main projects on the Manchester Codes bootcamp. It was an exercise in object-oriented programming, through initially exploring user stories and domain modelling. It was extremely satisfying working with a GUI and being able to actively see changes we were making in the JavaScript, HTML and CSS. 

The entire project was pair-programmed between myself and [Shona McBride](https://github.com/samcbride); we had a great time doing it and a lot of laughs! Probably too many laughs on reflection!

***

## Concepts Covered

- Domain Modelling
- Object-oriented Programming 
- Single Responsibility Principle
- Dependency inversion
- ‘This’
- TDD with Jest
- Mocks, Spies and Stubs

***

## Project Learning Objectives

### Effectively breaking down a user story into a domain model

A user story portrays parts of the functionality an application should have, from the perspective of the person using it.

For example:

> As a cruise ship captain, <br>
> So I can get passengers aboard a ship <br>
> I want a ship to have a starting port 

A developer takes a user story and splits it up into *objects*, *methods*, and *properties* - this is known as *domain modelling*. For this project: 

> *Object* (generally the noun in the user story): *Ship* <br>
> *Property* (possessed by the object): *startingPort* <br>
> *Method* (generally the verb in the user story): *setSail / dock* <br>
 
### Understanding Object-oriented Programming

Successful object-oriented code has a structure that splits code up into simple, reusable pieces of code blueprint (classes), which are used to create individual instances of objects. Classes often represent broad categories (e.g. Port) that share attributes (e.g. ships), but not the same value of the attribute, and contain methods which are only available to the objects that belong to that class.

An example of this in our project would be our Port Constructor, which rendered new port instances each time a destination was entered. 
It was outside of the scope of the project to delve into encapsulation, abstraction, inheritance and polymorphism, however these were concepts we researched in detail. <br>
 
### Understanding ‘This’

*this* is found in object methods, and constructor functions. The value of *this* in a given method is the object that the method is attached to. We used this regularly in our codebase. <br>
 
### Understanding dependency inversion

Dependency inversion - the premise that an object (for example, our **ship**) can depend on other objects (such as the **itinerary**), but it shouldn't know what they are. All **ship** knows is that it's receiving an argument passed into it's constructor, and it is assigning it as a property. This is good as it means the itinerary (and the ports within that!) are substitutable, and as such our code is more modular.

In our code, the **controller** was receiving the **ship**, the ship was receiving the **itinerary** (which begins life as an empty array), and the itinerary is receiving the **ports**. All of these are constructors in our src folder. <br>
 
### Using mocks to emulate dependencies in the test, and spies to track call history of other functions

As OOP inherently is interlinked with other objects, using mocks was important to help control the environment and isolate the tests so as not to be affected by other parts of the code. By using jest.fn() we were able to utilise mocks and spies, and use certain methods to test behaviour; for example our setSail method under ‘gets added to port on instantiation’. <br> 

*** 
 
## Acknowledgments

Thanks to the [Manchester Codes](https://manchestercodes.com/software-engineer-fasttrack) team for all the support and knowledge so far: Ersel, Susana, Rui, Gareth, Tom, Ian and more. And my pair programming partner Shona, of course! 

