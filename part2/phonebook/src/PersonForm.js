import { useState } from 'react'
import personService from './services/persons'

const PersonForm = ({ persons, setPersons, setErrorMessage, setMessageClass }) => {
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
        const foundPerson = persons.find(p => p.name === newName)
        if (window.confirm(`${foundPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
            const changedPerson = { ...foundPerson, number: newNumber}

            personService
            .update(foundPerson.id, changedPerson)
            .then(returnedPerson => {
                console.log(`Updated ${newName}`)
                setPersons(persons.map(person => person.id !== foundPerson.id ? person : returnedPerson))
                setErrorMessage(
                    `Updated '${foundPerson.name}'`
                )
                setMessageClass('notification')
                setTimeout(() => {
                    setErrorMessage(null)
                    setMessageClass(null)
                }, 5000)
            })
            .catch(error => {
                setErrorMessage(
                  `Error happened while updating '${foundPerson.name}'`
                )
                setMessageClass('error')
                setTimeout(() => {
                    setErrorMessage(null)
                    setMessageClass(null)
                }, 5000)
            })
        }
        // alert(`${newName} is already added to phonebook`)
      } else {
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1,
        }

        personService
        .create(personObject)
        .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setErrorMessage(
                `Added' ${returnedPerson.name}'`
            )
            setMessageClass('notification')
            setTimeout(() => {
                setErrorMessage(null)
                setMessageClass(null)
            }, 5000)
            // setNewName('')
            // setNewNumber('')
        })
      
        // setPersons(persons.concat(personObject))
      }
      setNewName('')
      setNewNumber('')
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