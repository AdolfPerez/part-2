const Total = ({course}) => <h3>total of {course.parts.map(part => part.exercises).reduce((s, p) => s + p)} exercises</h3>

export default Total