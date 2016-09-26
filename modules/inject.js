import React from 'react'
import store from './store'

export default class RestorInjector extends React.Component {
  constructor({ state }) {
    super()
    this.state = { [state]: store.state[state] }
  }

  componentDidMount() {
    store.on(this.props.state, state => this.setState({ [this.props.state]: state}))
  }

  render() {
    let data = this.state[this.props.state]
    if(!data) data = this.props.defaultValue

    return this.props.children(data)
  }
}
