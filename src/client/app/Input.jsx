import React from 'react';
import Client from './Client.jsx';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        text: '',
        visible: false,
        acc: ''
    };
    this.updateState = this.updateState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateState(e) {
      this.setState({acc: e.target.value, visible: false});
  }

  onSubmit (e) {
    this.setState({visible: true});
  }

  render() {
    const popup = (this.state.visible ? <Client value={this.state.acc} /> : null);
    return (
      <div>
        <input type = "text" value = {this.state.acc} 
            onChange = {this.updateState} />
        <div><button onClick={this.onSubmit}>Submit</button></div>
        {popup}
       </div>
    );
  }
}

export default Input;
