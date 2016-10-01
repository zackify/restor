import React from 'react'
import { listen } from '../../dist'

export default class ManualListener extends React.Component {
  constructor(){
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    listen('todos', data => this.setState({ count: data.length }), true)
  }

  render() {
    return <div>{this.state.count} manual todo count</div>
  }
}