import React from 'react'
import store from './store'

export default class RestorInjector extends React.Component {
  constructor({ state }) {
    super()
    this.state = { [state]: store.state[state] }
    this.onData = this.onData.bind(this)
  }

  componentDidMount() {
    store.listen(this.props.state, this.onData)
  }

  componentWillUnmount() {
    store.unlisten(this.props.state, this.onData)
  }

  onData(data) {
    let { state } = this.props
    this.setState({ [state]: data })
  }

  render() {
    let data = this.state[this.props.state]
    if(!data) return null

    return this.props.children(data)
  }
}
