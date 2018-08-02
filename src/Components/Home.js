import React, { Component } from 'react';
import FlavorsLink from "./FlavorsLink";
import OrderTable from "./OrderTable";
import NewRequestSection from "./NewRequestSection";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order:[{pino:"Feche",flavor1:"frutilla",flavor2:"chocolate"}]
        };
        this.addRequest = this.addRequest.bind(this);
    }

    addRequest(newRequest){
        this.state.order.push(newRequest);
        this.setState({order:this.state.order});
    }

  render() {
    return (
      <Container className="home">
          <FlavorsLink />
          <OrderTable order={this.state.order}/>
          <NewRequestSection addRequest={this.addRequest}/>
      </Container>
    );
  }
}

export default Home;
