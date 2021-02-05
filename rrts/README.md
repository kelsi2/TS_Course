# React with TypeScript

Building a TypeScript app with React and Redux.

### Pros

1. Easier to avoid typos like incorrect action types
2. Better dev understanding of data types
3. Easier to refactor

### Cons

1. Bad type def files
2. Lots of generics
3. Lots of imports, everything (action creator, action, reducer, store, component, etc.) needs to be aware of types
4. Redux is functional which doesn't ingrate well with TS classes

## What I Learned

1. React.Component is a generic. We need to create a props interface, in this case AppProps, to define the types of props we will be passing in. Otherwise TS and React don't know what the props are. We can make props optional the same way we do with other TS interfaces by using a question mark after the prop name.
2. Readonly<{}> type will occur if we don't pass in a state type and try to declare state in a constructor. State is the second type we can pass into the React.Component generic. Readonly<{}> is the default type of the state passed into a constructor, we can't assign anything to it because nothing exists on that object. To fix this we can define the state outside of a constructor or define the class using an interface on the generic. If we define the state without a constructor we are overriding the state object on the class.
3. Action files get very bloated when using Redux with TS due to the need for defining so many interfaces. It's best to have one action file for each type of action and use index.ts as a central export point.
