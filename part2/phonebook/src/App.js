import { useState, useEffect } from 'react'

import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} setFilterText={setFilterText} setShowAll={setShowAll}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} showAll={showAll} filterText={filterText} setPersons={setPersons} />
    </div>
  )
}

export default App