import Todos from './todos'
import Footer from './footer'

class App extends React.Component {
  render() {
    return (
      <Todos />
      <Footer />
    )
  }
 }
  
ReactDOM.render(
  <App />,
  document.getElementById('container')
);
