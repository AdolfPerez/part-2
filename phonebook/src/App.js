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
    .then(initialPersons => {
      setPersons(initialPersons)
      setToPrint(initialPersons)
    })
  }, [])

  const onSubmit = event => {
    event.preventDefault()
    if(!newName) {
      alert(`add a name`)
    } else {
      const exists = persons.filter(person => newName === person.name)
      if (exists[0]) {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          if(newNumber){
            personService
            .update(exists[0].id, {...exists[0], number: newNumber})
            .then(updatedPerson =>
              personService.getAll()
              .then(returnedPersons => {
                  setToPrint(returnedPersons)
                  setPersons(returnedPersons)
                  setNewName('')
                  setNewNumber('')
                }
              )
            )
          } else {
            alert(`add a number`)
          }
        }
      } else if (newNumber) {
        personService
          .create({name: newName, number: newNumber})
          .then(returnedPerson => {
            const newPersons = persons.concat(returnedPerson)
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
  const deleteOne = person => {
    if(window.confirm(`Delete ${person.name}?`)){
      personService
      .deleteOne(person.id)
      .then(deletedPerson => {
        personService
        .getAll()
        .then(returnedPersons => {
          setToPrint(returnedPersons)
          setPersons(returnedPersons)
        })
      })
    }
  }

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
            <Persons toPrint={toPrint} deleteOne={deleteOne} />
          </>
}

export default App