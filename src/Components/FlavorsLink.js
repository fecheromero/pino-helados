import React, { Component } from 'react';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import '../App.css';
import Link from "react-router-dom/es/Link";

class FlavorsLink extends Component {
  render() {
    return (
      <div className="center-row">
        <Link to="/flavors"><Button content='Primary'>Gustos</Button></Link>
      </div>
    );
  }
}

export default FlavorsLink;
