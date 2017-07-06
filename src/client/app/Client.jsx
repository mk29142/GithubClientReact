import React from 'react';
import {loadJson, getRepos} from './helpers.js';
import axios from 'axios';

class Client extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
        languages: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.value}/repos`)
      .then(res => {
        const posts = getRepos(res);
        this.setState({ languages: posts });
      });
  }

   render() {
      return (
         <div>
            <h1>{this.state.languages}</h1>
         </div>
      )
   }
}

export default Client;
