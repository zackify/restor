const store = (initialState = {}) => {
  let state = initialState
  let listeners = {}
  let middleware = []
  let instance = {
    use(fn) {
      if(typeof fn === 'function') return middleware.push(fn)
      middleware.push(...fn)
    },
    dispatch(key, action) {
      let newState = action
      if(typeof action === 'function') newState = action(state[key])

      state = { ...state, [key]: newState }
      middleware.forEach(fn => fn({...instance, state: () => state })(value => newState = value)({ key, value: newState }))
      state = { ...state, [key]: newState }
      if(listeners[key]) listeners[key].forEach(listener => listener(newState))
    },
    listen(key, cb, initial) {
      if(state[key] && initial) cb(state[key])
      if(!listeners[key]) listeners[key] = []
      listeners[key].push(cb)
    },
    unlisten(key, cb) {
      let index = listeners[key].indexOf(cb)
      listeners[key].splice(index, 1)
    },
    state() {
      return { ...state }
    }
  }

  return instance
}

module.exports = store()
