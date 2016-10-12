import { dispatch, Inject } from '../../modules'

describe('Inject', () => {
  it('gets current state', () => {
    dispatch('react', () => 'awesome')
    let wrapper = shallow(
      <Inject state="react">
        {data => <div className="value">{data}</div>}
      </Inject>
    )
    expect(wrapper.props().children).to.equal('awesome')
  })

  it('gets current state', () => {
    let wrapper = mount(
      <Inject state="reactor">
        {data => <div className="value">{data}</div>}
      </Inject>
    )

    dispatch('reactor', () => 'newest value')

    expect(wrapper.find('.value').props().children).to.equal('newest value')

  })

  it('updates after dispatch', () => {
    let wrapper = mount(
      <Inject state="reactor">
        {data => <div className="value">{data}</div>}
      </Inject>
    )

    dispatch('reactor', () => 'new value')
    expect(wrapper.find('.value').props().children).to.equal('new value')

    dispatch('reactor', () => 'newer value')
    expect(wrapper.find('.value').props().children).to.equal('newer value')

  })

  it('unmounts without problem', () => {
    let wrapper = mount(
      <Inject state="reactor">
        {data => <div className="value">{data}</div>}
      </Inject>
    )
    wrapper.unmount()
    dispatch('reactor', () => 'new value')
    expect(wrapper).to.be.ok


  })
})
