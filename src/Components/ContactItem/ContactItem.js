import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactItem extends Component {
    static propTypes = {
        handleDelete: PropTypes.func.isRequired,
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.number
    }

    handleDelete = (e) => {
        this.props.handleDelete(e.target.closest('li').id)
    }

    render() {
        return(
            <li id = {this.props.id} key = {this.props.id}>
                <span>{this.props.name}: {this.props.number}</span>
                <button type = "button" onClick = {this.handleDelete}>delete</button>
            </li>
        )
    }
}