import React, { Component } from 'react'
import Avatar from './Avatar';

export default class Card extends Component {
    constructor(props) {
        super(props)
        // We need to bind because we are using this inside the onChangeNameHandler function
        this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
    }

    onChangeNameHandler(val) {
        // Calling the function that we receive as prop from the App component
        this.props.onAvatarClick(val, this.props.id);
    }

    render() {
        return (
            <div className="card">
                <p>id: 12347</p>
                <Avatar
                    onChangeName={this.onChangeNameHandler}
                    userName={this.props.cardName} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi laborum ipsam corrupti maiores cupiditate eos laboriosam cum nemo omnis numquam sit, delectus aut aspernatur esse veritatis hic dolores. Ad, repudiandae.</p>
            </div>
        )
    }
}
