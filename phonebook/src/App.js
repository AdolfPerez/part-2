import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ toPrint, setToPrint ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  useEffect(() => {
    personService
    .getAll()
    .then(({data}) => {
      setPersons(data)
      setToPrint(data)
    })
  }, [])

  const onSubmit = event => {
    event.preventDefault()
    if(!newName) {
      alert(`add a name`)
    } else {
      const exists = persons.filter(person => newName === person.name)
      if (exists[0]) {
        alert(`${newName} is already added to phonebook`) 
      } else if (newNumber) {
        personService
          .create({name: newName, number: newNumber})
          .then(response => {
            const newPersons = persons.concat(response.data)
            setPersons(newPersons)
            setToPrint(newPersons)
            setNewName('')
            setNewNumber('')
          })
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