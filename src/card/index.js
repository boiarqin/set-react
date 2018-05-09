import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.props.clickCard(this.props.index);
    }
    render(){
        return (<div
            className={`card
                icon-set-quantity-${this.props.number}
                ${this.props.color}
                icon-set-${this.props.shape}-${this.props.fill}
                ${this.props.isSelected ? 'selected' : ''}
            `}
            onClick={this.handleClick}
        />);
    }
};

export default Card;