const Total = ({course}) => {
  const exercises = course.parts.map(part => part.exercises)
  return <p>Number of exercises {exercises.reduce((s, p) => s + p)} </p>
}

export default Total