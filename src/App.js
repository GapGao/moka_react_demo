import React, { Component } from 'react';
import './assets/css/App.css';

import Tree from './component/tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside className="list">
          <Tree />
        </aside>
      </div>
    );
  }
}

export default App;
