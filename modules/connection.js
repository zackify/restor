import React from 'react'
import store from './store'

export default ( key, defaultValue = {} ) => component => class RestorWrapper extends React.Component {
  constructor() {
    super()
    this.state = { [key]: store.state[key] }
    this.onData = this.onData.bind(this)
  }

  componentDidMount() {
    store.listen(key, this.onData)
  }

  componentWillUnmount() {
    store.unlisten(key, this.onData)
  }

  onData(data) {
    this.setState({ [key]: data })
  }

  render() {
    let data = this.state[key]
    if(!data) return null
    return React.createElement(component, { [key]: data })
  }
}
