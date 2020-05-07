import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super (props);
        this.state = {
            bdage: this.props.age
        };
    }

    addAge  = () => {
                this.setState({bdage: this.state.bdage + 1});
            }
        

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1> {lastName}, {firstName}</h1>
                <h3>Age: {this.state.bdage}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button onClick={this.addAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}
// this expert the class to the App.js file
export default PersonCard;