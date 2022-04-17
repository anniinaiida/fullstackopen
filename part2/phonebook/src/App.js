import { useState, useEffect } from 'react'

import Persons from './Persons'
import PersonForm from './PersonForm'
import Filter from './Filter'
import Notification from './Notification'
import personService from './services/persons'

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Phonebook app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])

  const [filterText, setFilterText] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [messageClass, setMessageClass] = useState('')


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
      <Notification message={errorMessage} className={messageClass} />
      <Filter filterText={filterText} setFilterText={setFilterText} setShowAll={setShowAll}/>
      <h3>Add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} setMessageClass={setMessageClass}/>
      <h3>Numbers</h3>
      <Persons persons={persons} showAll={showAll} filterText={filterText} setPersons={setPersons} setErrorMessage={setErrorMessage} setMessageClass={setMessageClass} />
      <Footer />
    </div>
  )
}

export default App