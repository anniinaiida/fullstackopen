const Person = ({ person }) => {
    return (
        <p>{person.id} {person.name} {person.number}</p>
    )
}

const Persons = ({ persons, showAll, filterText }) => {

    const numbersToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))

    return (
        <ul>
            {numbersToShow.map(person =>
                <Person key={person.name} person={person}/>
            )}
        </ul>
    )
}
export default Persons