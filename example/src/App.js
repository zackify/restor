import React from 'react';
import Todos from './todos'
import Footer from './footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Todos />
        <Footer />
      </div>
    );
  }
}

export default App;
