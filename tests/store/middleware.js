import { use, dispatch, state } from '../../modules'

describe('middleware', () => {
  it('updates store state on next', () => {
    dispatch('test', () => 'test value')

    const middleware = store => next => action => {
      if(action.key !== 'test') return next(action)
      expect(store.state().test).to.equal('test value')
      next(action)
      expect(store.state().test).to.equal('new value')

    }

    use(middleware)
    dispatch('test', () => 'new value')

  })

  it('dispatches new action from middleware', () => {
    const middleware = store => next => action => {
      if(action.key !== 'coolAction') return next(action)
      next(action)
      store.dispatch('logger', (state = []) => state.concat(['another action: ' + action.value]))

    }

    use(middleware)
    dispatch('coolAction', () => 'dispatches a logger')
    expect(state().logger[0]).to.equal('another action: dispatches a logger')
  })
})
