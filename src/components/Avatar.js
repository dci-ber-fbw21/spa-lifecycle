import React, { Component } from 'react'

export default class Avatar extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Calling the function that we receive as prop from the Card component
        this.props.onChangeName(`hello from ${this.props.userName}`);
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                AVATAR: {this.props.userName}
            </div>
        )
    }
}
