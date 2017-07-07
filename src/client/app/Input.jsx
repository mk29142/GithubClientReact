import React from 'react';
import Client from './Client.jsx';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        visible: false,
        account: ''
    };
    this.updateState = this.updateState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateState(e) {
      this.setState({account: e.target.value, visible: false});
  }

  onSubmit (e) {
    this.setState({visible: true});
  }

  render() {
    const popup = (this.state.visible ? <Client value={this.state.account} /> : null);
    return (
      <div>
        <input type = "text" value = {this.state.account}
            onChange = {this.updateState} />
        <div><button onClick={this.onSubmit}>Submit</button></div>
        {popup}
       </div>
    );
  }
}

export default Input;
