import React, { Component } from 'react';
import '../App.css';
import List from "semantic-ui-react/dist/es/elements/List/List";

class FlavorPage extends Component {

  render() {
      var flavors = [{flavor:"limon",description:"bien amargo"},{flavor:"frutilla",description:"cultivada en la punta del Everest"},{flavor:"chocolate",description:"fabricado por umpalumpas"}];
    return (
      <div className="center-row">
          <List divided relaxed>
              {flavors.map(flavor =>(
                  <List.Item>
                      <List.Content>
                          <List.Header>{flavor.flavor}</List.Header>
                          <List.Description>{flavor.description}</List.Description>
                      </List.Content>
                  </List.Item>
              ))}
          </List>
      </div>
    );
  }
}

export default FlavorPage;
