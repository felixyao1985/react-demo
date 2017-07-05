import React from 'react'
import BaseComponent from './BaseComponent.js';

class App extends BaseComponent {
  render() {
    let me = this;
    return (
      <div>APP
		
        { me.props.children }
      </div>
    )
  }
}

export default App;
