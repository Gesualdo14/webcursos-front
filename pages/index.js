import { useEffect, useState } from "react"
import CourseCard from "../components/CourseCard"
import Header from "../components/Header"

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/courses`)
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setCourses(data)
        }
      })
      .catch((err) => {
        console.log({ err })
      })
  }, [])
  console.log({ courses })
  return (
    <div className="df fdc aic jcc">
     <Header />

      <div className="df fdc p5 tac mb5">
        <h1 style={{lineHeight: '2rem'}}>"Vive como si fueras a morir mañana, aprende como si fueras a vivir por siempre."</h1>
        <span>- Mahatma Gandhi</span>
      </div>

      <h2 className="mt20 tdu">CURSOS</h2>
      <div className="mt10">
      {courses.map((c) => <CourseCard course={c} key={c._id}/>)}
    </div>
      </div>
  )
}
