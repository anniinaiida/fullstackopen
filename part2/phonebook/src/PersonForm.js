import { useState } from 'react'

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const handlePersonChange = (event) => {
      setNewName(event.target.value)
    }
  
    const handlePersonNumberChange = (event) => {
      setNewNumber(event.target.value)
    }
  
    const addPerson = (event) => {
      event.preventDefault()
  
      if (persons.filter(person => person.name === newName).length > 0) {
        alert(`${newName} is already added to phonebook`)
      } else {
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }
      
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    }
  
    return (
      <div>
        <div>debug: {newName}</div>
        <div>debug: {newNumber}</div>
  
        <h2>Phonebook</h2>
        <form onSubmit={addPerson}>
          <div>name: <input value={newName} onChange={handlePersonChange}/></div>
          <div>number: <input value={newNumber} onChange={handlePersonNumberChange}/></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  export default PersonForm