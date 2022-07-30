import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([{ name: 'Arto Hellas', number: '9876543210' }]) 
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
            filter shown with<input onChange={filter} />
            <h2>add a new</h2>
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
            {toPrint.map( person => <div key={person.name}> {person.name} {person.number} </div> )}
          </>
}

export default App