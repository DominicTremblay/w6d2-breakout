# ReactJS Breakout

- What is React
- React Components: class vs stateless
- Data Flow: data down, action up
- Binding Functions
- PropTypes
- Add CSS to Components

## What is React

- React is a JavaScript library for building complex UIs with components.

## Class vs Stateless Components

- If you component doesn't need to maintain any state, you should use a stateless component. It's cleaner and you don't need to mess around with `this`.
- Do use a class whenever your component needs to manage the state.

## Dataflow

** Data down, actions up **

- Data flow in React is unidirectional
- Data is passed down from a parent component to a child component
- When the state is manage in the parent component this.setState needs to be executed in the parent
- A child component can execute a function in the parent through props

## Function Binding in ReactJS

We have few ways to bind functions in ReactJS. The most usual ones are these 2:

1.  Bind functions in the constructor
2.  Use Arrow functions as class properties

## Binding functions in the constructor

class someClass extends Component {
constructor(props) {
super(props);
this.someFunction = this.someFunction.bind(this);
}

    someFunction(){

    }

}

## Arrow Functions

- Arrow functions do not rebind `this`. The arrow function inherits the `this` binding of the class instance
- It is easier and cleaner to use. However, we must be aware of a few differences

  class someClass extends Component {
  constructor(props) {
  super(props);
  }

  someFunction = () => {

  }
  }

## Key Differences Between Bound and Arrow Functions

- Arrow functions won't be added to the prototype (no inheritance, cannot call super)
- Arrow functions are not as performant as bound functions. However, this is not noticeable in most app
- Arrow functions has a impact on memory. You should care about this only if you're creating multiple instances.

## PropTypes

- You can do typechecking of component props with the propType property.

## Add CSS to React

- Ideally, components should be self contained. CSS rules are added to each component.

## Running the App

- After cloning the repo, run npm install
- To run the app, you have to run the client and the server each in their own terminal window

1.  cd server && node app.js
2.  cd client && npm start

- The app will use your Tweeter MongoDB
