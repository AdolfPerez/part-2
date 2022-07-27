import Part from "./Part"

const Content = ({course}) => course.parts.map((part, i) => <Part key={i} part={part}/>)

export default Content