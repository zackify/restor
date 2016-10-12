import { dispatch, listen, unlisten } from '../../modules'

describe('listen', () => {
  it('calls listen when action comes through', () => {
    listen('listentest', value => expect(value).to.equal('listening'))

    dispatch('listentest', () => 'listening')
  })

  it('calls listen with current state on creation', () => {
    const onData = spy()
    dispatch('listeninitial', () => 'listening')

    listen('listeninitial', onData, true)

    expect(onData.calledOnce).to.equal(true)
  })

  it('doesnt call listen with current state on creation', () => {
    const onData = spy()
    dispatch('listeninitial', () => 'listening')

    listen('listeninitial', onData)

    expect(onData.called).to.equal(false)
  })

  it('unlistens from listener', () => {
    const onData = spy()
    listen('listentest2', onData)

    dispatch('listentest2', () => 'listening')

    unlisten('listentest2', onData)

    dispatch('listentest2', () => 'listening still')

    expect(onData.calledOnce).to.equal(true)
  })

})
