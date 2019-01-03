import React, { Component } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import E from './components/E';
import F from './components/F';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<A/>*/}
          {/*<B name={'zhangsan'} age={18}/>*/}
          {/*<C/>*/}
          <E/>
          <F/>
      </div>
    );
  }
}

export default App;
