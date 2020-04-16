import React, { useState } from 'react';
import Filter from './components/Filter';
import AddName from './components/AddName';
import AddNumber from './components/AddNumber';
import Results from './components/Results';
import Persons from './components/Persons';

const App = () => {
  //adding a user / checking if a user is existing
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  //phone number state
  const [phoneNum, setPhoneNum] = useState('');
  // controlling the form input element.
  const [newName, setNewName] = useState('');

  const [filter, setFilter] = useState('');

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  //check if user added to the phonebook
  const existingUser = (event) => {
    event.preventDefault();
    persons.map((person) => {
      person.name === newName
        ? window.alert(`${newName} is already added to the phonebook`)
        : setPersons([...persons, { name: newName, number: phoneNum }]);
      console.log({ persons });
    });
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setPhoneNum(event.target.value);
  };

  const personsToShow =
    filter === ''
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );
  const row_names = () =>
    personsToShow.map((person) => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));

  return (
    <>
      <h3>Phonebook</h3>
      <Filter value={filter} onChange={handleFilterChange} />
      <AddName name={newName} handleNameChange={handleNameChange} />
      <AddNumber value={phoneNum} handleNumberChange={handleNumberChange} />
      <button type='submit' onClick={existingUser}>
        Add
      </button>
      <h3>Numbers</h3>
      <Persons persons={row_names()} />
    </>
  );
};

export default App;
