import React, { Component } from 'react';
import './App.css';
import Life from './components/Life';
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Toggle this to true to check the Life example
      isDisplayed: false
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
        <Card
          cardName="Jane Doe"
          onAvatarClick={
            (messageFromChild) => {
              // We finally get the message sent from Avatar and passed through Card
              console.log(messageFromChild);
            }
          } />

        <Card cardName="Joe Doe" onAvatarClick={
          (messageFromChild) => {
            // We finally get the message sent from Avatar and passed through Card
            console.log(messageFromChild);
          }
        } />

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
