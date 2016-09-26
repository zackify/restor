import React from 'react'
import store from './store'

export default ( key, defaultValue = {} ) => component => class RestorWrapper extends React.Component {
  constructor() {
    super()
    this.state = { [key]: store.state[key] }
  }

  componentDidMount() {
    store.on(key, state => this.setState({ [key]: state}))
  }

  render() {
    let data = this.state[key]
    if(!data) data = defaultValue
    return React.createElement(component, { [key]: data })
  }
}
