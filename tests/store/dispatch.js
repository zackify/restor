import { dispatch, state } from '../../dist'

describe('dispatch', () => {
  it('updates store state on dispatch', () => {
    dispatch('test', () => 'test value')

    expect(state().test).to.equal('test value')
  })
})