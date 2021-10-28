import './App.css';
import React, {useState} from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleOpenStore = () => {
    setIsOpen(prev => !prev);
  }

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(() => value);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>
        <p>test from the input</p>
        <p>{inputValue}</p>
      </div>
      <hr/>
      <div data-test-id='render-text'>
        The store is {isOpen ? 'Open' : 'Close'}
      </div>
      <button onClick={toggleOpenStore}>
        {isOpen ? 'Close' : 'Open' }
      </button>
    </div>
  )
}




export default App;
