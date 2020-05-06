import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super (props);
        this.state = {
            bdage: this.props.age
        };
    }

    

    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h3>Age: {this.props.age}</h3>
                <h3>Hair Color: {this.props.hairColor}</h3>
            </div>
        );
    }
}

export default PersonCard;