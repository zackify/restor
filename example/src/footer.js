import React from 'react'
import { Inject } from '../../dist'
import { AddTodo } from './actions'

export default class Footer extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    AddTodo('new todos from footer!')
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.setState({ text: e.target.value })}
        />
        <button
          onClick={() => AddTodo(this.state.text)}>
          Add Todo
        </button>

        <Inject state="todos">
          {todos => (
            <p>There are currently {todos.length} todos</p>
          )}
        </Inject>

      </div>

    )
  }
}
