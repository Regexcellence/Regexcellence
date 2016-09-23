import React, { Component } from 'react';
import { Link } from 'react-router';

class ListItem extends Component {
  render() {
    return(
      <li className="list-group-item">  
        <Link>
        {this.props.name + '\n'}
        <span className="pull-right">
          {this.props.author}
        </span>
        </Link>
      </li>
    );
  }
}

export default ListItem;
