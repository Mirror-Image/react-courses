import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Sean',
      lastName: '',
      count: 0,
    };
    this.inputRef = React.createRef();
  }

  handleFirstNameChange = (event) => {
    this.setState((prevState) => {
      console.log('prevState', prevState);

      return ({
        firstName: event.target.value
      })
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('Updated State', this.state)
    console.log(this.inputRef.current)
  }

  handleLastNameNameChange = (event) => {
    this.setState(() => ({
      lastName: event.target.value
    }));
  }

  handleInputChange = ({ target: { value, name } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (this.state.count > 10) {
        return null;
      }

      return ({
        count: prevState.count + 1
      })
    }, () => console.log('Hello from setSate Callback'))
  }

  componentDidMount() {
    console.log('MY REF', this.inputRef.current);
  }

  render() {

    return (
      <div>
        <input
          // ref={this.inputRef}
          type="text"
          // onChange={() => console.log(this.inputRef.current.offsetHeight)}
        />
        <CustomInput
          ref={this.inputRef}
          value={this.state.firstName}
          handler={this.handleInputChange}
          name="firstName"
          label="First Name"
        />
        <CustomInput
          value={this.state.lastName}
          handler={this.handleInputChange}
          name="lastName"
          label="Last Name"
        />

        {/*<label>*/}
        {/*  Last Name:*/}
        {/*  <input*/}
        {/*    name="lastName"*/}
        {/*    value={this.state.lastName}*/}
        {/*    type="text"*/}
        {/*    onChange={(event) => this.handleInputChange(event)}*/}
        {/*  />*/}
        {/*</label>*/}
        <div style={{padding: '20px'}}>{this.state.count}</div>
        <button onClick={this.handleClick}>Count +1</button>
        <button
          onClick={() => this.inputRef.current.sayHiFromCustomInput()}
        >
          Say hi from CustomInput
        </button>
      </div>
    )
  }
}

class CustomInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  sayHiFromCustomInput() {
    console.log('Hello')
  }

  render() {
    return (
      <label>
        {this.props.label}:
        <input
          name={this.props.name}
          value={this.props.value}
          type="text"
          onChange={this.props.handler}
        />
      </label>
    );
  }
}

export default App;
