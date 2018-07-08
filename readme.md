# ReactJS Breakout

- React Components: class vs stateless
- CSS by Components
- Data Flows: data down, action up
- Manage the state
- Use Props
- PropTypes
- Handle Binding

## Class vs Stateless Components

- If you component doesn't need to maintain any state, you should use a stateless component. It's cleaner and you don't need to mess around with `this`.
- Do use a class whenever your component needs to manage the state.

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
