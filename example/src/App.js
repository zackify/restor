import React from 'react';
import Todos from './todos'
import Footer from './footer'
import ManualListener from './manual-listener'

import { logger, todoInjector } from './middleware'
import { use } from '../../dist'

use([logger, todoInjector])
//use(todoInjector)

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    let { hidden } = this.state
    return (
      <div>
        {hidden ? null : <Todos />}
        <Footer />
        <ManualListener />
        <div onClick={() => this.setState({hidden: !hidden })}>toggle todos</div>
      </div>
    );
  }
}

export default App;
