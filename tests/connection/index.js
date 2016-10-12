import { dispatch, connection, reset } from '../../modules'


describe('connection', () => {
  it('gets current state', () => {
    dispatch('react', () => 'awesome')

    const Component = ({ data }) => <div className="value">{data}</div>
    let wrapper = shallow(React.createElement(connection('react')(Component)))

    expect(wrapper.props().data).to.equal('awesome')
    reset()
  })

  it('gets current state', () => {
    const Component = ({ data }) => <div className="value">{data}</div>
    let wrapper = mount(React.createElement(connection('reactor')(Component)))

    dispatch('reactor', () => 'newest value')

    expect(wrapper.text()).to.equal('newest value')
    reset()
  })

  it('updates after dispatch', () => {
    const Component = ({ data }) => <div className="value">{data}</div>
    let wrapper = mount(React.createElement(connection('reactor')(Component)))

    dispatch('reactor', () => 'new value')
    expect(wrapper.text()).to.equal('new value')

    dispatch('reactor', () => 'newer value')
    expect(wrapper.text()).to.equal('newer value')
    reset()
  })

  it('unmounts without problem', () => {
    const Component = ({ data }) => <div className="value">{data}</div>
    let wrapper = mount(React.createElement(connection('reactor')(Component)))
    
    wrapper.unmount()
    dispatch('reactor', () => 'new value')
    expect(wrapper).to.be.ok

    reset()
  })
})
