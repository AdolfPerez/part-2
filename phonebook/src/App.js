import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    const exists = persons.filter(person => newName === person.name)
    if (exists[0]) {
      alert(`${newName} is already added to phonebook`) 
    } else {
      setPersons(persons.concat({name: newName}))
      setNewName('')
    }}
  const onChange = event => setNewName(event.target.value)
  const showPersons = persons.map(person => <div key={person.name}>{person.name}</div>)

  return  <>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmit} >
              <div>
                name: <input value={newName} onChange={onChange} />
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