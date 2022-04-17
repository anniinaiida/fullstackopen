const Filter = ({ filterText, setFilterText, setShowAll }) => {
    const handleFilterChange = (event) => {
        setFilterText(event.target.value)
        if (event.target.value === '')
            setShowAll(true)
        else
            setShowAll(false)
    }
    
    return (
        <div>
        <div>debug: {filterText}</div>
        <div>filter shown with <input value={filterText} onChange={handleFilterChange}/></div>
        </div>
    )
}
export default Filter