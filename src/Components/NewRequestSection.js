import React, { Component } from 'react';
import Input from "semantic-ui-react/dist/es/elements/Input/Input";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import '../App.css'
import Card from "semantic-ui-react/dist/es/views/Card/Card";
import Select from "semantic-ui-react/dist/es/addons/Select/Select";
class NewRequestSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pino: "",
            openFlavorSelection:false,
            flavor2:"",
            flavor1:""
        };
    this.openFlavorSelection = this.openFlavorSelection.bind(this);
    this.handlePinoChange = this.handlePinoChange.bind(this);
    this.handleFlavor1Change = this.handleFlavor1Change.bind(this);
    this.handleFlavor2Change = this.handleFlavor2Change.bind(this);
    this.closeFlavorSelection = this.closeFlavorSelection.bind(this);
    }

    openFlavorSelection(){
        this.setState({openFlavorSelection:true})
    }

    handlePinoChange (event, elem){
        this.setState({pino: elem.value});
    }

    handleFlavor1Change (event, elem){
        this.setState({flavor1: elem.value});
    }

    handleFlavor2Change (event, elem){
        this.setState({flavor2: elem.value});
    }

    closeFlavorSelection(){
        this.setState({openFlavorSelection:false});
    }

    flavorSelection(){
        let html = <div/>;
        let flavors = [{ value:"frutilla",text: "frutilla" },{ value:"chocolate", text: "chocolate" },{ text: "limon", value:"limon"}];
        if(this.state.openFlavorSelection) {
            html = (
                <div className="flavor-selection">
                    <Card.Content  >
                        <Card.Header>{this.state.pino}</Card.Header>
                        <div className="center-row">
                            <Select placeholder='primer gusto' onChange={this.handleFlavor1Change} value={this.state.flavor1} options={flavors}/>
                        </div>
                        <br/>
                        <div className="center-row">
                            <Select placeholder='segundo gusto' onChange={this.handleFlavor2Change} value={this.state.flavor2} options={flavors} />
                        </div>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green' onClick={function(){
                                this.props.addRequest({pino:this.state.pino,flavor1:this.state.flavor1,flavor2:this.state.flavor2})
                            }.bind(this)}>
                                Aceptar
                            </Button>
                            <Button basic color='red' onClick={this.closeFlavorSelection}>
                                Cancelar
                            </Button>
                        </div>
                    </Card.Content>
                </div>
            )
        }
        return html;
    }
    render() {

        return (
            <div className="home">
                <div className="center-row">
                    <Input label='Nombre' placeholder='Feche' value={this.state.pino} onChange={this.handlePinoChange}/>
                    <Button onClick={this.openFlavorSelection}>Agregar pedido</Button>
                </div>
                <br/>
                {this.flavorSelection()}
            </div>
        );
    }
}

export default NewRequestSection;
