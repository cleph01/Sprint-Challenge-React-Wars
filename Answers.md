# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

- React JS is a Javascript UI library.  It provides developers with the ability to build large scale applications effectively.  It does this by abstracting away a lot of the tedious vanilla JS and replaces it with a straightforward, declarative, component based development paradigm. 

1. What does it mean to think in react?

- To think in React means to think in a declarative way vs. in a functional way.  This means to know what element is needed to do what and tell React to implement that technology via Components without regard to how React will do it. 

1. Describe state.

State is a concept that enapsulates the data an app needs to use.

1. Describe props.

- Props is a helper object we use When we want to pass information held on state inside one component to another component.  We never make changes to props data - props are read only

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

- A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects.  You sync effects in React by using the effect hook ( useEffect() )with changes in our state or props.  Doing so is essential to handling side effects in the most efficient manner.
