export default key => component => class RestorWrapper extends React.Component {
  constructor() {
    super()
    this.state = { [key]: store.state[key] }
  }
  
  componentDidMount() {
    store.on(key, state => this.setState({ [key]: state}))
  }
  
  render() {
    return React.createElement(component, { ...this.state })
  }
}