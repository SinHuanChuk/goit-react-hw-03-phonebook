import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
    static propTypes = {
        handleFilter: PropTypes.func.isRequired,
        filter: PropTypes.string
    }

    handleFilter = (e) => {
        e.preventDefault()

        this.props.handleFilter(e.target.value)
    }

    render() {
        return (<input type = 'text' placeholder = 'find your contact' onChange = {this.handleFilter} value = {this.props.filter}></input>)
    }
}