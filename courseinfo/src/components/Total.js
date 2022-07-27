const Total = ({course}) => {
  const exercises = course.parts.map(part => part.exercises)
  return <h3>total of {exercises.reduce((s, p) => s + p)} exercises</h3>
}

export default Total