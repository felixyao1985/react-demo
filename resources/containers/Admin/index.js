import React from 'react'
import BaseComponent from '../BaseComponent.js'
import './Admin.scss';

class Admin extends BaseComponent {

  static fetchData(params, query) {
    return [];
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    let me = this;
  }

  render() {
    return (
      <div>
        Admin Page
      </div>
    );
  }
}

export default Admin;