import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem'
import PropTypes from 'prop-types';

export default class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.string,
        handleDelete: PropTypes.func.isRequired
    }

    render() {
        return(
            <ul>
                {this.props.contacts.filter(el => el.name.toLowerCase().includes(this.props.filter)).map(el => <ContactItem handleDelete = {this.props.handleDelete} name = {el.name}  number = {el.number} id = {el.id}/>)}
            </ul>
        )
    }
}