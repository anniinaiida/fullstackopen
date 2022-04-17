import personService from './services/persons'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Person = ({ person }) => {
    return (
        <>{person.id} {person.name} {person.number}</>
    )
}

const Persons = ({ persons, showAll, filterText, setPersons }) => {

    const numbersToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

    const deletePerson = ( id, name ) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService
            .deleteRequest(id)
            .then(response => {
                console.log(`${name} had been deleted`)
                setPersons(persons.filter(n => n.id !== id))
            })
        }
    }

    return (
        <ul>
            {numbersToShow.map(person =>
                <div key={`div-${person.name}`}>
                    <Person key={person.name} person={person}/>
                    <Button key={`button-${person.name}`} handleClick={() => deletePerson(person.id, person.name)} text='delete' />
                </div>
            )}
        </ul>
    )
}
export default Persons