import React, { Component } from 'react';
import './App.css';
import Life from './components/Life';
import Card from './components/Card';
import FormInput from './components/FormInput';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jane',
      bio: '',
      age: 42,
      // Toggle this to true to check the Life example
      isDisplayed: false,
      people: [
        {
          name: 'jane'
        },
        {
          name: 'joe'
        }
      ]
    }

    this.avatarClickHandler = this.avatarClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  // Lifecycle example
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isDisplayed: false
      })
    }, 3000);
  }

  avatarClickHandler(updatedName, id) {
    // We finally get the message sent from Avatar and passed through Card
    console.log(updatedName, id);

    // Cannot do this
    // this.state.people[id].name = 'New name';

    const peoplArrayClone = [...this.state.people];
    peoplArrayClone[id].name = updatedName;

    this.setState({
      people: peoplArrayClone
    });

    // people[x].name = 'New name 007';

    // this.setState({
    //   people: [
    //     {
    //       name: 'jane'
    //     },
    //     {
    //       name: 'joe'
    //     }
    //   ]
    // })
  }

  // {name: 'ghj', val: 'dfghjk'}
  onChangeHandler(inputObj) {
    // const name = e.target.name;

    this.setState({
      [inputObj.name]: inputObj.val
    })
  }

  render() {
    return (
      <div className="App">
        <form>
          <FormInput
            inputType="text"
            inputLabel="Name"
            inputName="name"
            inputValue={this.state.name}
            onChangeHandler={this.onChangeHandler} />

          <FormInput
            inputType="text"
            inputLabel="Bio"
            inputName="bio"
            inputValue={this.state.bio}
            onChangeHandler={this.onChangeHandler} />

          <FormInput
            inputType="number"
            inputLabel="Age"
            inputName="age"
            inputValue={this.state.age}
            onChangeHandler={this.onChangeHandler} />
        </form>

        {
          this.state.people.map((person, index) => {
            return (
              <Card
                key={index}
                id={index}
                cardName={person.name}
                onAvatarClick={this.avatarClickHandler} />
            );
          })
        }

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
