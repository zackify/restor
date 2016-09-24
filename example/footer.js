export default class Footer extends React.Component {
  componentDidMount() {
    setTimeout(() => store.dispatch('todos', () => ['new todos from footer!']), 2000)
  }

  render() {
    return (
      <div>Click here for new todo</div>
    )
  }
}