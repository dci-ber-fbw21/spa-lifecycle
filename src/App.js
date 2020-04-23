import React, { Component } from 'react';
import './App.css';
import Life from './components/Life';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayed: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isDisplayed: false
      })
    }, 3000);
  }


  render() {
    return (
      <div className="App">
        {
          this.state.isDisplayed ?
            <Life /> :
            null
        }
      </div>
    );
  }
}

export default App;
