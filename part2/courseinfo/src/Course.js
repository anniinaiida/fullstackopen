const CourseHeader = ({ name }) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
        {parts.map(part => 
            <Part key={parts.id} part={part} />
        )}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <p><b>Number of exercises {total}</b></p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
        <CourseHeader name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
        
    )
}

export default Course