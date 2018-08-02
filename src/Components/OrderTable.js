import React, { Component } from 'react';
import Table from "semantic-ui-react/dist/es/collections/Table/Table";
import '../App.css'
class OrderTable extends Component {

    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="center-row">
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Pino</Table.HeaderCell>
              <Table.HeaderCell>Gusto1</Table.HeaderCell>
              <Table.HeaderCell>Gusto2</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
              {this.props.order.map((request)=>
                  <Table.Row>
                    <Table.HeaderCell>{request.pino}</Table.HeaderCell>
                    <Table.HeaderCell>{request.flavor1}</Table.HeaderCell>
                    <Table.HeaderCell>{request.flavor2}</Table.HeaderCell>
                  </Table.Row>)
              }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default OrderTable;
