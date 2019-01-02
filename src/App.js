import React, { Component } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<A/>*/}
          <B name={'zhangsan'} age={18}/>
          <C/>
      </div>
    );
  }
}

export default App;
