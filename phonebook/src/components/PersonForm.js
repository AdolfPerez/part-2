const Person = ({onSubmit, newName, onChangeNewName, newNumber, onChangeNewNumber}) =>        
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

export default Person