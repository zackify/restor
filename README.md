[![CircleCI](https://circleci.com/gh/zackify/restor.svg?style=svg&circle-token=ac016b20203ae7e83ea04ccaf0df3248fc62f118)](https://circleci.com/gh/zackify/restor)
[![Coverage Status](https://coveralls.io/repos/github/zackify/restor/badge.svg?branch=master)](https://coveralls.io/github/zackify/restor?branch=master)

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


```js
//todos.js

import React from 'react';
import { connection } from 'restor'

const Todos = ({ todos }) => (
  <div>
    {todos.map(post => <div key={post}>{post}</div>)}
  </div>
)
export default connection('todos')(Todos)


//or

import React from 'react';
import { Inject } from 'restor'

export default () => (
  <div>
    <Inject state="todos">
      {todos => todos.map(post => <div key={post}>{post}</div>)}
    </Inject>
  </div>
)


```

Now, in a completely separate place in the react state tree, we can call `store.dispatch`

```js
//random-component.js

import { dispatch } from 'restor'

...
componentDidMount() {
  dispatch('todos', () => ['new todos from footer!'])
  //or update the current state
  dispatch('todos', (state) => state.concat(['new todos from footer!']))
}
...

```


## Middleware

Middleware is simple to use.
```js

import { use } from 'restor'

const logger = store => next => action => {
  console.log('Action Received:', action.key, action.value)
  console.log('New State:', store.state())
}

const todoInjector = store => next => ({ key, value }) => {
  if(key !== 'todos') return
  let items = [...value]
  items[1] = 'middleware injected'
  next(items)
}

use(logger)
use(todoInjector)

//or
use([logger, todoInjector])

```
##API

`import { state, dispatch, Inject, connection } from 'restor'``

`state`: function returning current store state `state()`

`dispatch`: Update the state in the store

This gives you the current state at the specfied key, and you must return a new version of that state.

- `dispatch('todos', state => newState)`

`Inject` Component Props:
- state `state={state key}`

`connection` HOC:
- `connection(state key)(Component)`
