import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Courses = ({courses}) => <div>
  <h1>Web development curriculum</h1>
  {courses.map(course => <div key={course.id}>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>)}
</div>

export default Courses