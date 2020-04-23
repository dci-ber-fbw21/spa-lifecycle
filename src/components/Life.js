import React, { Component } from 'react'

class Life extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        const lifeElement = document.querySelector('.life');
        console.log('constructor calling... ', lifeElement);
    }

    componentDidMount() {
        // save it on the class so we can access it
        this.counterInterval = setInterval(() => {

            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })

            // No no
            // this.setState({
            //     count: this.state.count++
            // })
        }, 1000);

        const lifeElement = document.querySelector('.life');
        console.log('componentDidMount calling... ', lifeElement);
    }

    componentWillUnmount() {
        // clear the interval
        clearInterval(this.counterInterval);
        const lifeElement = document.querySelector('.life');
        console.log('componentWillUnmount calling... ', lifeElement);
    }

    render() {
        console.log('rendering...rendering...')
        return (
            <div className="life">{this.state.count}</div>
        )
    }
}


export default Life;