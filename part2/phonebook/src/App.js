import React, { useState } from 'react';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);

  //showing filtered names
  const [showAll, setShowAll] = useState(true);

  //phone number state
  const [phoneNum, setPhoneNum] = useState('');

  // controlling the form input element.
  const [newName, setNewName] = useState('');

  const existingUser = (event) => {
    event.preventDefault();

    persons.map((person) => {
      person.name === newName
        ? window.alert(`${newName} is already added to the phonebook`)
        : setPersons([...persons, { name: newName, number: phoneNum }]);
    });
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setPhoneNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter />
      <form>
        <div>
          <h3>Add a new</h3>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={phoneNum} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit' onClick={existingUser}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>Name: {newName}</p>
      <p>Number: {phoneNum}</p>
    </div>
  );
};

export default App;
