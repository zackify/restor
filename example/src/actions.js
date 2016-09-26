import { store } from '../../dist'

export function AddTodo(todo) {
  store.dispatch('todos', (state = []) => state.concat([ todo ]))
}
