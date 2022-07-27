import Header from "./Header"
import Content from "./Content"
//import Total from "./Total"

const Course = ({course}) => <div>
  <Header course={course} />
  <Content course={course} />
</div>
  //<Total course={course}/>

export default Course