export default (initialState = {}) => {
  let state = initialState
  let listeners = {}
  
  return {
     dispatch(key, action) {
       let newState = action(state[key])
       state[key] = newState
       if(listeners[key]) listeners[key].forEach(listener => listener(newState))
     },
     on(key, cb){
       if(!listeners[key]) listeners[key] = []
       listeners[key].push(cb)
     },
     state: { ...state },
  }
    
}