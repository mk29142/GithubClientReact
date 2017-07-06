import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Input from './Input.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Enter Github user name</p>
        <Input />
      </div>
   );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

