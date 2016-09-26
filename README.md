# restor
simpler-than-redux react state management

**Early stages, lots of stuff not done :P **

##Install

```
npm install restor --save
```


##Example

See `/example`. Clone, npm install, npm start to see.

##Quickstart

Anywhere you need to update state from a different place, you import the store, and dispatch an update. The example covers this very well.


```todos.js
import React from 'react';
import { connection } from 'restor'

const Todos = ({ todos }) => (
  <div>
    {todos.map(post => <div key={post}>{post}</div>)}
  </div>
)
export default connection('todos', [])(Todos)


//or

import React from 'react';
import { Inject } from 'restor'

export default () => (
  <div>
    <Inject state="todos" defaultValue={[]}>
      {todos => todos.map(post => <div key={post}>{post}</div>)}
    </Inject>
  </div>
)


```

Now, in a completely separate place in the react state tree, we can call `store.dispatch`

```random-component.js
import { store } from 'restor'

...
componentDidMount() {
  store.dispatch('todos', () => ['new todos from footer!'])
  //or update the current state
  store.dispatch('todos', (state) => state.concat(['new todos from footer!']))
}
...

```


##API

`import { store, Inject, connection } from 'restor'``

`store` methods:
- dispatch `dispatch(state key, (state) => newState)`
- on `on(state key, (state) => do something)` Called on a state change

`Inject` Component Props:
- state `state={state key}`
- defaultValue `defaultValue={[]}` before any state exists

`connection` HOC:
- `connection(state key, defaultValue)(Component)`
