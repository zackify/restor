import React from 'react'
import { store, Inject } from '../../dist'

export default class Footer extends React.Component {
  componentDidMount() {
    setTimeout(() => store.dispatch('todos', () => ['new todos from footer!']), 2000)
  }

  render() {
    return (
      <div>
        <p>Click here for new todo</p>

        <Inject state="todos" defaultValue={[]}>
          {todos => (
            <p>There are currently {todos.length} todos</p>
          )}
        </Inject>

      </div>

    )
  }
}
