import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '9876543210' }
  ]) 
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
      } else {
        if (newNumber) {
          setPersons(persons.concat({name: newName, number: newNumber}))
          setNewName('')
          setNewNumber('')
        } else {
          alert(`add a number`)
        }
      }
    }
  }
  const onChangeNewName = event => setNewName(event.target.value)
  const onChangeNewNumber = event => setNewNumber(event.target.value)
  const showPersons = persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)

  return  <>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmit} >
              <div>
                name: <input value={newName} onChange={onChangeNewName} />
              </div>
              <div>
                number: <input value={newNumber} onChange={onChangeNewNumber} />
              </div>
              <div>
                <button type="submit">add</button>
              </div>
            </form>
            <h2>Numbers</h2>
            {showPersons}
          </>
}

export default App