import { dispatch, state } from '../../modules'

describe('dispatch', () => {
  it('updates store state on dispatch', () => {
    dispatch('test', () => 'test value')

    expect(state().test).to.equal('test value')
  })

  it('updates store state with plain value', () => {
    dispatch('test', 'test value')

    expect(state().test).to.equal('test value')
  })

  it('modifies current state', () => {
    dispatch('test', state => state + ' blah')

    expect(state().test).to.equal('test value blah')
  })
})
