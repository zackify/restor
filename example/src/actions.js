import { dispatch } from '../../dist'

export function AddTodo(todo) {
  dispatch('todos', (state = []) => state.concat([ todo ]))
}
