const logger = store => next => action => {
  console.log('Action Received:', action.key, action.value)
  console.log('New State:', store.state())
}

const todoInjector = store => next => ({ key, value }) => {
  if(key !== 'todos' || value[1] === 'middleware injected') return
  console.log('modifying action value, adding a todo')
  let items = [...value]
  items[1] = 'middleware injected'
  next(items)
}

export {
  logger,
  todoInjector,
}