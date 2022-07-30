import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '9876543210' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ toPrint, setToPrint ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    if(!newName) {
      alert(`add a name`)
    } else {
      const exists = persons.filter(person => newName === person.name)
      if (exists[0]) {
        alert(`${newName} is already added to phonebook`) 
      } else if (newNumber) {
        const newPersons = persons.concat({name: newName, number: newNumber})
        setPersons(newPersons)
        setToPrint(newPersons)
        setNewName('')
        setNewNumber('')
      } else {
        alert(`add a number`)
      }
    }
  }
  const onChangeNewName = event => setNewName(event.target.value)
  const onChangeNewNumber = event => setNewNumber(event.target.value)
  const filter = event => setToPrint(persons.filter(person => person.name.toLowerCase().slice(0, event.target.value.length) === event.target.value.toLowerCase()))

  return  <>
            <h2>Phonebook</h2>
            <Filter filter={filter} />
            <h2>Add a new</h2>
            <PersonForm
            onSubmit={onSubmit}
            newName ={newName} 
            onChangeNewName={onChangeNewName}
            newNumber={newNumber}
            onChangeNewNumber={onChangeNewNumber} />
            <h3>Numbers</h3>
            <Persons toPrint={toPrint} />
          </>
}

export default App